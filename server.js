// Import and require inquirer and mysql2
const inquirer = require('inquirer');
const mysql = require('mysql2');

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL login information,
    user: 'root',
    password: '',
    database: 'employeeTracker_db'
  },
  console.log(`Connected to the Employee Structure database.`)
).promise();

// Start menu
const start = [
  {
    type: 'list',
    name: 'initialPrompt',
    message: 'What would you like to do?',
    choices: [
      'View All Employees',//
      'Add Employee',//
      'Delete Employee',//
      'View All Roles',//
      'Add Role',//
      'Delete Role',//
      // 'View Employees by Manager',
      // 'View Employees by Department',
      'Update Employee Role | Department | Manager',
      'View All Departments',//
      'Add Department',//
      // 'Delete Department',
      // 'View Total Utilized Budget per Department',
      'Quit'//
    ],
  },
];

// Function to handle inquirer prompts and user selections
async function initialPrompt() {
  const input = await inquirer.prompt(start)
  switch (input.initialPrompt) {
    case 'View All Employees':
      console.table(await getEmp());
      initialPrompt();
      break;
    case 'Add Employee':
      addEmp();
      break;
    case 'Delete Employee':
      delEmp();
      break;
    case 'View All Roles':
      console.table(await getRoles());
      initialPrompt();
      break;
    case 'Add Role':
      addRole();
      break;
    case 'Delete Role':
      delRole();
      break;
    case 'View Employees By Manager':
      viewEmpMan();
      break;
    case 'View Employees By Department':
      viewEmpDep();
      break;
    case 'Update Employee Role | Department | Manager':
      updateEmp();
      break;
    case 'View All Departments':
      console.table(await getDep());
      initialPrompt();
      break;
    case 'Add Department':
      addDep();
      break;
    case 'Delete Department':
      delDep();
      break;
    case 'View Total Utilized Budget per Department':
      depUtilization();
      break;
    case 'Quit':
      quit();
      break;
  }
}

// Response functions according to initial prompt
async function getEmp() {
  try {
    const results = await db.query('SELECT * FROM employee')
    return (results[0])
  } catch (error) {
    console.error(error);
  }
}

// Function to create a new employee
async function addEmp() {
  try {
    const listRoles = roleList
    const listMans = manList
    const response = await inquirer.prompt([
      {
        type: 'input',
        message: 'Enter the first name of the new employee:',
        name: 'newEmpFirst'
      },
      {
        type: 'input',
        message: 'Enter the last name of the new employee:',
        name: 'newEmpLast'
      },
      {
        type: 'list',
        message: 'Select the role of the new employee:',
        name: 'newEmpRole',
        choices: listRoles
      },
      {
        type: 'list',
        message: 'Select the new employee\'s manager.',
        name: 'newEmpMan',
        choices: listMans
      }
    ]);
    const query = `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)`;
    const values = [
      response.newEmpFirst,
      response.newEmpLast,
      response.newEmpRole,
      response.newEmpMan,
    ];
    const [res] = await db.query(query, values);
    console.log(`Added a new employee to the database!`);
  } catch (err) {
    console.error(err);
  }
  initialPrompt();
}

// Function to delete an employee from the database
async function delEmp() {
  try {
    const listEmp = await empList()
    const response = await inquirer.prompt([
      {
        type: 'list',
        name: 'empToDel',
        message: 'Select the employee to remove from the database:',
        choices: listEmp
      },
    ]);
    const empSelect = response.empToDel;
    const query = 'DELETE FROM employee WHERE id = ?';
    const results = await db.query(query, [empSelect]);

    console.log(`${empSelect} was successfully removed from the database.`);
  } catch (error) {
    console.error('Error deleting row:', error);
  }
  initialPrompt();
}

// Function to gather information regarding all available roles
async function getRoles() {
  try {
    const results = await db.query('SELECT * FROM role')
    return (results[0])
  } catch (error) {
    console.error(error);
  }
}

// Function to add a usable employee role
async function addRole() {
  try {
    const listDep = await depList();
    const response = await inquirer.prompt([
      {
        type: 'input',
        name: 'newRoleTitle',
        message: 'Enter the title of the new role:',
      },
      {
        type: 'input',
        name: 'newRoleSal',
        message: 'Enter the salary associated with the new role:',
      },
      {
        type: 'list',
        name: 'newRoleDep',
        message: 'Enter the department of the new role:',
        choices: listDep,
      }
    ]);
    console.log(response.newRoleTitle);
    const query = `INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)`;
    const values = [
      response.newRoleTitle,
      response.newRoleSal,
      response.newRoleDep,
    ];
    const [res] = await db.query(query, values);
    console.log(`Added role ${response.newRoleTitle} to the database!`);
  } catch (err) {
    console.error(err);
  }
  initialPrompt();
}

// Function to delete an available role from the database as well as associated employees
async function delRole() {
  try {
    const listRole = await roleList()
    const response = await inquirer.prompt([
      {
        type: 'list',
        name: 'roleToDel',
        message: 'Select the role to be removed from the database:',
        choices: listRole
      },
    ]);
    const roleSelect = response.roleToDel;
    const query = 'DELETE FROM role WHERE id = ?';
    const results = await db.query(query, [roleSelect]);

    console.log(`Role was successfully removed from the database.`);
    // console.log(`${roleSelect} was successfully removed from the database.`);
  } catch (error) {
    console.error('Error deleting role:', error);
  }
  initialPrompt();
}

// Function to view employees by manager
// async function viewEmpMan() {
//   try {

//   } catch (error) {
//     console.error(error);
//   }
// };

// Function to view all employees by department
// async function viewEmpDep() {
//   try {

//   } catch (error) {
//     console.error(error);
//   }
// };


// Function to update an employee's information
async function updateEmp() {
  try {
    const listEmp = await empList();
    const listDep = await depList();
    const listRoles = await roleList();
    const listMan = await manList();
    const response = [
      {
        type: 'list',
        name: 'empToUpdate',
        message: 'Select and employee to update:',
        choices: listEmp,
      },
      {
        type: 'list',
        name: 'updateEmpOptions',
        message: 'Select employee attribute to update:',
        choices: ['Role', 'Department', 'Manager']
      },
    ];

    const { updateEmpOptions, empToUpdate } = await inquirer.prompt(response);
    switch (updateEmpOptions) {

      // Update the role an employee is associated with
      case 'Role':
        const { updateEmpRole } = await inquirer.prompt([
          {
            type: 'list',
            message: 'Select the employees new role:',
            name: 'updateEmpRole',
            choices: listRoles
          }
        ]);
        await empRoleUpdate(updateEmpRole, empToUpdate);
        console.log('Modified employee role in database.');
        break;

      // Update the department an employee is associated with
      case 'Department':
        const { updateEmpDepId } = await inquirer.prompt([
          {
            type: 'list',
            message: 'Update the selected employee\'s department:',
            name: 'updateEmpDepId',
            choices: listDep,
          },
        ]);
        const depId = await roleListPerDep(updateEmpDepId)
        const { updateEmpDep } = await inquirer.prompt([
          {
            type: 'list',
            message: 'Select the employees new role:',
            name: 'updateEmpDep',
            choices: depId
          }
        ])
        await empRoleUpdate(updateEmpDep, empToUpdate);
        console.log('Modified employee department in database.');
        break;

      // Update an employee's manager
      case 'Manager':
        const { updateEmpMan } = await inquirer.prompt([
          {
            type: 'list',
            message: 'Select the employees new manager:',
            name: 'updateEmpMan',
            choices: listMan,
          }
        ]);
        await empManUpdate();
        console.log('Modified employee\'s manager in the database.');
        break;
      default:
        console.log('Invalid selection');
        break;
    }
  } catch (error) {
    console.error(error);
  }
  initialPrompt();
}

// Function to gather information regarding all available departments
async function getDep() {
  try {
    const results = await db.query('SELECT * FROM department')
    console.table(results[0])
  } catch (error) {
    console.error(error);
  }
}

// Function to create new department
async function addDep() {
  try {
    const response = await inquirer.prompt({
      type: 'input',
      name: 'newDepName',
      message: 'Enter the name of the new department:',
    });
    console.log(response.newDepName);
    const query = `INSERT INTO department(name) VALUES ("${response.newDepName}")`;
    const [res] = await db.query(query);
    console.log(`Added department ${response.newDepName} to the database!`);
  } catch (err) {
    console.error(err);
  }
  initialPrompt();
}

// Function to delete an available department from the database as well as associated employees
// async function delDep() {
//   try {

//   } catch (error) {
//     console.error(error);
//   }
// };

// Function to display fund utilization per department
// async function depUtilization() {
//   try {

//   } catch (error) {
//     console.error(error);
//   }
// };

function quit() {
  console.log('Were you impressed?');
  process.exit()
}

// Get list of employees
async function empList() {
  try {
    const query = 'SELECT * FROM employee';
    const [results] = await db.query(query);

    return results.map((employee) => ({
      name: `${employee.first_name} ${employee.last_name}`,
      value: employee.id,
    }));
  } catch (error) {
    console.error(error);
    return [];
  }
}
// async function empIdList() {
//   try {
//     const query = 'SELECT id FROM employee WHERE ';
//     const [results] = await db.query(query);

//     return results.map((employee) => ({
//       name: employee.id,
//       value: `${employee.first_name} ${employee.last_name}`,
//     }));
//   } catch (error) {
//     console.error(error);
//     return [];
//   }
// }

// Get list of roles
async function roleList() {
  try {
    const query = 'SELECT * FROM role';
    const [results] = await db.query(query);
    return results.map((role) => ({
      name: role.title,
      value: role.id,
    }));
  } catch (error) {
    console.error(error);
    return [];
  }
}

// Get list of roles based on selected department
async function roleListPerDep(dept) {
  try {
    const query = 'SELECT role.title FROM role WHERE department_id = ?';
    const values = [dept]
    const [results] = await db.query(query, values);
    return results.map(role => role.title);
  } catch (error) {
    console.error(error);
    return [];
  }
}

// Get list of departments
async function depList() {
  try {
    const query = 'SELECT * FROM department';
    const [results] = await db.query(query);
    return results.map((department) => ({
      name: department.name,
      value: department.id,
    }));
  } catch (error) {
    console.error(error);
    return [];
  }
}

// Get list of department managers
async function manList() {
  try {
    const results = await db.query('SELECT * FROM employee');
    const managers = results[0].map((employee) => ({
      name: `${employee.first_name} ${employee.last_name}`,
      value: employee.id
    }));

    // Option for null manager
    managers.unshift({
      name: 'No manager',
      value: null,
    });
    return managers;
  } catch (error) {
    console.error(error);
    return [];
  }
}

// Update an employee manager
async function empManUpdate(empToUpdate, updateEmpMan) {
  try {
    const statement = 'UPDATE employee SET manager_id = ? WHERE id = ?';
    const values = [updateEmpMan, empToUpdate];
    await db.query(statement, values);
  }
  catch (error) {
    console.error(error);
  }
}

// Update an employee role
async function empRoleUpdate(updateEmpRole, empToUpdate) {
  try {
    const statement = 'UPDATE employee SET role_id = ? WHERE id = ?';
    const values = [updateEmpRole, empToUpdate];
    await db.query(statement, values);
  }
  catch (error) {
    console.error(error);
  }
}

// Update an employee department and role
async function empDepUpdate(updateEmpDep, empToUpdate) {
  try {
    const statement = 'UPDATE role SET department_id = ? WHERE id = ?';
    const values = [updateEmpDep, empToUpdate];
    await db.query(statement, values);
  }
  catch (error) {
    console.error(error);
  }
}

// Starts initial questions at the end of each run of script
initialPrompt();