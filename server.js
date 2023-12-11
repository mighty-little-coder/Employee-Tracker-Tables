// Import and require mysql2
const inquirer = require('inquirer');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    password: '',
    database: 'employeeTracker_db'
  },
  console.log(`Connected to the Employee Structure database.`)
);

inquirer
  .prompt([
    {
      type: 'list',
      name: 'initialPrompt',
      message: 'What would you like to do?',
      choices: [
                'View All Employees',
                'Add Employee',
                // 'Delete Employee',
                'View All Roles',
                'Add Role',
                // 'Delete Role',
                // 'Update Employee Managers',
                // 'View Employees by Manager',
                // 'View Employees by Department',
                'Update Employee Role',
                'View All Departments',
                'Add Department',
                // 'Delete Department',
                // 'View Total Utilized Budget per Department',
                'Quit'
               ],
    },
    {
      type: 'input',
      name: 'newDep',
      message: 'What is the name of the new department?',
    },
    {
      type: 'input',
      name: 'newRole',
      message: 'What is the name of the new role?',
    },
    {
      type: 'input',
      name: 'newSalary',
      message: 'What is the salary of this new role?',
    },
    {
      type: 'list',
      name: 'newRoleDep',
      message: 'What department does this new role belong to?',
      choices: [
                'Engineering',
                'Sales',
                'Assembly',
                'Service'
               ],
    },
    {
      type: 'input',
      name: 'newFirstName',
      message: 'What is the new employee\'s first name?',
    },
    {
      type: 'input',
      name: 'newLastName',
      message: 'What is the new employee\'s last name?',
    },
    {
      type: 'list',
      name: 'newEmpRole',
      message: 'What is the new employee\'s role?',
      choices: [
                'Mechanical Engineer',
                'Electrical Engineer',
                'Test Engineering',
                'Engineering Lead',
                'Government Contracts',
                'Private Contracts',
                'Hydraulic Assembly',
                'Electrical Assembly',
                'Assembly Lead',
                'Customer Service',
                'Financial Planning',
                'Service Technician'
               ],
    },
    {
      type: 'list',
      name: 'newEmpManager',
      message: 'Who is the new employee\'s manager?',
      choices: [
                'Engineering Lead',
                'Assembly Lead'
               ],
    },
    {
      type: 'list',
      name: 'empRoleUpdate',
      message: 'Which employee\'s role would you like to update?',
      choices: [
                '1',
                '2',
                '3',
                '4',
                '5',
                '6',
                '7',
                '8',
                '9',
                '10',
                '11',
                '12',
                '13',
                '14',
                '15',
                '16',
                '17',
                '18',
                '19',
                '20',
                '21',
                '22',
                '23',
                '24'
               ],
    },
    {
      type: 'list',
      name: 'empRoleAssign',
      message: 'Which role do you want to assign to the selected employee?',
      choices: [
                'Mechanical Engineer',
                'Electrical Engineer',
                'Test Engineering',
                'Engineering Lead',
                'Government Contracts',
                'Private Contracts',
                'Hydraulic Assembly',
                'Electrical Assembly',
                'Assembly Lead',
                'Customer Service',
                'Financial Planning',
                'Service Technician'
               ]
    },
    // {
    //   type: 'list',
    //   name: 'empDel',
    //   message: 'Which employee would you like to remove?',
    //   choices: [
    //             '1',
    //             '2',
    //             '3',
    //             '4',
    //             '5',
    //             '6',
    //             '7',
    //             '8',
    //             '9',
    //             '10',
    //             '11',
    //             '12',
    //             '13',
    //             '14',
    //             '15',
    //             '16',
    //             '17',
    //             '18',
    //             '19',
    //             '20',
    //             '21',
    //             '22',
    //             '23',
    //             '24'
    //            ],
    // },
    // {
    //   type: 'list',
    //   name: 'roleDel',
    //   message: 'Which role do you want to remove?',
    //   choices: [
    //             'Mechanical Engineer',
    //             'Electrical Engineer',
    //             'Test Engineering',
    //             'Engineering Lead',
    //             'Government Contracts',
    //             'Private Contracts',
    //             'Hydraulic Assembly',
    //             'Electrical Assembly',
    //             'Assembly Lead',
    //             'Customer Service',
    //             'Financial Planning',
    //             'Service Technician'
    //            ]
    // },
    // {
    //   type: 'list',
    //   name: 'empUpdateManag',
    //   message: 'Which employee would you like to change the management status of?',
    //   choices: [
    //             '1',
    //             '2',
    //             '3',
    //             '4',
    //             '5',
    //             '6',
    //             '7',
    //             '8',
    //             '9',
    //             '10',
    //             '11',
    //             '12',
    //             '13',
    //             '14',
    //             '15',
    //             '16',
    //             '17',
    //             '18',
    //             '19',
    //             '20',
    //             '21',
    //             '22',
    //             '23',
    //             '24'
    //            ],
    // },
    // {
    //   type: 'list',
    //   name: 'managView',
    //   message: 'Which manager\'s subordinates would you like to view?',
    //   choices: [
    //             'Engineering Lead',
    //             'Assembly Lead'
    //            ],
    // },
    // {
    //   type: 'list',
    //   name: 'depView',
    //   message: 'What department would you like to view?',
    //   choices: [
    //             'Engineering',
    //             'Sales',
    //             'Assembly',
    //             'Service'
    //            ],
    // },
    // {
    //   type: 'list',
    //   name: 'deleteDep',
    //   message: 'Which department would you like to remove?',
    //   choices: [
    //             'Engineering',
    //             'Sales',
    //             'Assembly',
    //             'Service'
    //            ],
    // },
    // {
    //   type: 'list',
    //   name: 'depUtilization',
    //   message: 'Which department would you like to see the overall utilized budget of?',
    //   choices: [
    //             'Engineering',
    //             'Sales',
    //             'Assembly',
    //             'Service'
    //            ],
    // },
  ]);















  
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
