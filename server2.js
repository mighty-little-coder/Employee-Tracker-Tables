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
);

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
function initialPrompt() {
  inquirer
    .prompt(start)
    .then((input) => {
      switch (input.initialPrompt) {
        case 'View All Employees':
          viewEmp();
          break;
        case 'Add Employee':
          addEmp();
          break;
        case 'Delete Employee':
          delEmp();
          break;
        case 'View All Roles':
          viewRoles();
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
          viewDep();
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
    });
};

// Response functions according to initial prompt
async function viewEmp() {
  try {
    db.query ('SELECT * FROM employee', function (err, results) {
        if (err) {
          throw err;
        }
        console.table(results)
    })
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

async function viewRoles() {
  try {
    db.query ('SELECT * FROM role', function (err, results) {
        if (err) {
          throw err;
        }
        console.table(results)
    })
  } catch (error) { 
    console.error(error);
  }
  initialPrompt();
};

async function getRoles() {
  try {
    const results = await db.query('SELECT id, title FROM roles');
    return results[0].map(({ title, id }) => ({ name: title, value: id }));
  } catch (error) {
    console.error(error);
    return [];
  }
}


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

async function viewDep() {
  try {
    db.query ('SELECT * FROM department', function (err, results) {
        if (err) {
          throw err;
        }
        console.table(results)
    })
  } catch (error) {
    console.error(error);
  }
  initialPrompt();
};

// async function addDep() {
//   try {
//   function addDep() {
//     inquirer
//         .prompt({
//             type: "input",
//             name: "newDepName",
//             message: "Enter the title of the new department:",
//         })
//         .then((answer) => {
//             console.log(answer.name);
//             const query = `INSERT INTO department (department_name) VALUES ("${answer.name}")`;
//             connection.query(query, (err, res) => {
//                 if (err) throw err;
//                 console.log(`Added department ${answer.name} to the database!`);
//                 // restart the application
//                 start();
//                 console.log(answer.name);
//             });
//         });
// }
//--------------------------------------------------------------------------------
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
//--------------------------------------------------------------------------------
//   } catch (error) {
//     console.error(error);
//   }
// };

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













  
// NEEDS ADJUSTED CODE FOR CRUD PROGRAMS. BELOW FOR REFERENCE



// // Create a movie
// app.post('/api/new-movie', ({ body }, res) => {
//   const sql = `INSERT INTO movies (movie_name)
//     VALUES (?)`;
//   const params = [body.movie_name];
  
//   db.query(sql, params, (err, result) => {
//     if (err) {
//       res.status(400).json({ error: err.message });
//       return;
//     }
//     res.json({
//       message: 'success',
//       data: body
//     });
//   });
// });

// // Read all movies
// app.get('/api/movies', (req, res) => {
//   const sql = `SELECT id, movie_name AS title FROM movies`;
  
//   db.query(sql, (err, rows) => {
//     if (err) {
//       res.status(500).json({ error: err.message });
//        return;
//     }
//     res.json({
//       message: 'success',
//       data: rows
//     });
//   });
// });

// // Delete a movie
// app.delete('/api/movie/:id', (req, res) => {
//   const sql = `DELETE FROM movies WHERE id = ?`;
//   const params = [req.params.id];
  
//   db.query(sql, params, (err, result) => {
//     if (err) {
//       res.statusMessage(400).json({ error: res.message });
//     } else if (!result.affectedRows) {
//       res.json({
//       message: 'Movie not found'
//       });
//     } else {
//       res.json({
//         message: 'deleted',
//         changes: result.affectedRows,
//         id: req.params.id
//       });
//     }
//   });
// });

// // Read list of all reviews and associated movie name using LEFT JOIN
// app.get('/api/movie-reviews', (req, res) => {
//   const sql = `SELECT movies.movie_name AS movie, reviews.review FROM reviews LEFT JOIN movies ON reviews.movie_id = movies.id ORDER BY movies.movie_name;`;
//   db.query(sql, (err, rows) => {
//     if (err) {
//       res.status(500).json({ error: err.message });
//       return;
//     }
//     res.json({
//       message: 'success',
//       data: rows
//     });
//   });
// });

// // BONUS: Update review name
// app.put('/api/review/:id', (req, res) => {
//   const sql = `UPDATE reviews SET review = ? WHERE id = ?`;
//   const params = [req.body.review, req.params.id];

//   db.query(sql, params, (err, result) => {
//     if (err) {
//       res.status(400).json({ error: err.message });
//     } else if (!result.affectedRows) {
//       res.json({
//         message: 'Movie not found'
//       });
//     } else {
//       res.json({
//         message: 'success',
//         data: req.body,
//         changes: result.affectedRows
//       });
//     }
//   });
// });

// // Default response for any other request (Not Found)
// app.use((req, res) => {
//   res.status(404).end();
// });

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });