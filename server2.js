// Import and require mysql2
const inquirer = require('inquirer');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;

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
              'View All Employees',//--
              'Add Employee',
              // 'Delete Employee',
              'View All Roles',//--
              'Add Role',
              // 'Delete Role',
              // 'Update Employee Managers',
              // 'View Employees by Manager',
              // 'View Employees by Department',
              'Update Employee Role',
              'View All Departments',//--
              'Add Department',
              // 'Delete Department',
              // 'View Total Utilized Budget per Department',
              'Quit'//--
             ],
  },
];

// Function to handle inquirer prompts and user selections
async function initialPrompt() {
    const input = await inquirer.prompt(start)
      switch (input.initialPrompt) {
        case 'View All Employees':
          console.table (await getRoles());
          break;
        case 'Add Employee':
          addEmp();
          break;
        case 'Delete Employee':
          delEmp();
          break;
        case 'View All Roles':
          console.table (await getRoles());
          break;
        case 'Add Role':
          addRole();
          break;
        case 'Delete Role':
          delRole();
          break;
        case 'Update Employee Managers':
          updateEmpMan();
          break;
        case 'View Employees By Manager':
          viewEmpMan();
          break;
        case 'View Employees By Department':
          viewEmpDep();
          break;
        case 'Update Employee Role':
          updateEmpRole();
          break;
        case 'View All Departments':
          console.table (await getDep());
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
    };

// Response functions according to initial prompt
async function getEmp() {
  try {
    const results = await db.query ('SELECT * FROM employee')
        return (results[0])
  } catch (error) { 
    console.error(error);
  }
  initialPrompt();
};

// async function addEmp() {
//   try {

//   } catch (error) {
//     console.error(error);
//   }
// };

// async function delEmp() {
//   try {

//   } catch (error) {
//     console.error(error);
//   }
// };

async function getRoles() {
  try {
    const results = await db.query ('SELECT * FROM role')
        return (results[0])
  } catch (error) { 
    console.error(error);
  }
  initialPrompt();
};

// async function addRole() {
//   try {

//   } catch (error) {
//     console.error(error);
//   }
// };


// ---------------------------------------------UNDER CONSTRUCTION-----------------------------------------------------
// async function delRole() {
//   const selectDelRole = await getRoles()
//   try {
//     db.query ('DELETE FROM role WHERE id = ?', function (err, results) {
//         if (err) {
//           throw err;
//         }
//         console.table(results)
//     })
//   } catch (error) { 
//     console.error(error);
//   }
//   initialPrompt();
// };
// ---------------------------------------------UNDER CONSTRUCTION-----------------------------------------------------


// async function updateEmpMan() {
//   try {

//   } catch (error) {
//     console.error(error);
//   }
// };

// async function viewEmpMan() {
//   try {

//   } catch (error) {
//     console.error(error);
//   }
// };

// async function viewEmpDep() {
//   try {

//   } catch (error) {
//     console.error(error);
//   }
// };

// async function updateEmpRole() {
//   try {

//   } catch (error) {
//     console.error(error);
//   }
// };


async function getDep() {
    try {
      const results = await db.query ('SELECT * FROM department')
          console.table(results[0])
    } catch (error) {
      console.error(error);
    }
    initialPrompt();
  };

//-------------------------------------------------------------------
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
};
//-------------------------------------------------------------------

// async function delDep() {
//   try {

//   } catch (error) {
//     console.error(error);
//   }
// };

// async function depUtilization() {
//   try {

//   } catch (error) {
//     console.error(error);
//   }
// };

// Quit
function quit() {
  console.log('Were you impressed?');
  process.exit();
};


// ---------------------------------------------UNDER CONSTRUCTION-----------------------------------------------------
// Helper Functions
// Get list of roles
// async function getRoles() {
//   try {
//     const results = await db.query('SELECT * FROM roles');
//     return results[0].map((role) => ({
//       name: role.title,
//       value: role.id
//     }));
//   } catch (error) {
//     console.error(error);
//     return [];
//   }
// };
// ---------------------------------------------UNDER CONSTRUCTION-----------------------------------------------------


initialPrompt();