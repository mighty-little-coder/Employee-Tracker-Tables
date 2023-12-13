async function updateEmployee() { 
  try {
    const employees = await helpers.getEmployees();
    const roles = await helpers.getRoles();
    const departments = await helpers.getDepartments();
    const managers = await helpers.getManagers();
    
    const questions = [
      {
          type: 'list',
          message: "Select the employee you'd like to update:",
          name: 'employeeToUpdate',
          choices: employees
        },
      {
          type: 'list',
          message: 'Select the information to update:',
          name: 'infoToUpdate',
          choices: ['Role', 'Salary', 'Department', 'Manager']
        }
  ];
  const { infoToUpdate, employeeToUpdate } = await inquirer.prompt(questions);

  switch (infoToUpdate) {
            case 'Role':
                const { newRoleId } = await inquirer.prompt([
                    {
                        type: 'list',
                        message: 'Select the employees new role:',
                        name: 'newRoleId',
                        choices: roles
                      }
                ]);
                await helpers.updateEmployeeRole(employeeToUpdate, newRoleId);
                console.log(clc.green('Employee role successfully updated!'));
                break;
                case 'Salary':
                const { newSalary } = await inquirer.prompt([
                    {
                        type: 'input',
                        message: 'Enter the employees new salary:',
                        name: 'newSalary'
                    }
                ]);
                await helpers.updateEmployeeSalary(employeeToUpdate, newSalary);
                console.log(clc.green('Employee salary successfully updated!'));
                break;
            case 'Department':
              const { newDepartmentId } = await inquirer.prompt([
                    {
                        type: 'list',
                        message: 'Select the employees new department:',
                        name: 'newDepartmentId',
                        choices: departments
                    }
                ]);
                await helpers.updateEmployeeDepartment(employeeToUpdate, newDepartmentId);
                console.log(clc.green('Employee department successfully updated!'));
                break;
                // UPDATE EMPLOYEE MANAGER
                case 'Manager':
                  const { newManagerId } = await inquirer.prompt([
                    {
                        type: 'list',
                        message: 'Select the employees new manager:',
                        name: 'newManagerId',
                        choices: managers
                    }
                ]);
                await helpers.updateEmployeeManager(employeeToUpdate, newManagerId);
                console.log(clc.green('Employee manager successfully updated!'));
                break;
            default:
              console.log(clc.red('Invalid selection'));
                break;
        }
      } catch (error) {
        console.error(clc.red("Employee wasn't update! This error occurred: " + error));
        init();
      }
    init();
  };



  async function viewDepartmentBudget() {
    try {
        const departments = await helpers.getDepartments();
  
        const { departmentId } = await inquirer.prompt([
            {
                type: 'list',
                message: 'Select the department to view the budget:',
                name: 'departmentId',
                choices: departments,
            },
        ]);
  
        // Query to calculate the total utilized budget for the selected department
        const query = 
            SELECT 
                SUM(roles.salary) AS total_budget
            FROM employee
            INNER JOIN roles ON employee.role_id = roles.id
            WHERE roles.department_id = ?
        ;
  
        const [result] = await db.query(query, [departmentId]);
  
        // Display the total utilized budget
        console.log((Total Utilized Budget for the Department: $${result[0].total_budget}));
        init();
    } catch (error) {
        console.error(clc.red("Error occurred while calculating department budget: " + error));
        init();
    }
  }

//----------------------------------------------------------------------

  // Update Employee Manager
async function updateEmployeeManager(employeeId, newManagerId) {
  try {
    const sql = 'UPDATE employee SET manager_id = ? WHERE id = ?';
    const values = [newManagerId, employeeId];
    await db.query(sql, values);
  } catch (error) {
    console.error(error);
  }
}