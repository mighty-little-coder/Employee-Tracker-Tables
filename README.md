# Employee Tracker Tables


![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)


## Description

A MySQL cli application to keep track of employees information.

<code>GIVEN a command-line application that accepts user input<br>
WHEN I start the application<br>
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role<br>
WHEN I choose to view all departments<br>
THEN I am presented with a formatted table showing department names and department ids<br>
WHEN I choose to view all roles<br>
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role<br>
WHEN I choose to view all employees<br>
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to<br>
WHEN I choose to add a department<br>
THEN I am prompted to enter the name of the department and that department is added to the database<br>
WHEN I choose to add a role<br>
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database<br>
WHEN I choose to add an employee<br>
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database<br>
WHEN I choose to update an employee role<br>
THEN I am prompted to select an employee to update and their new role and this information is updated in the database</code>


## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [Features](#features)
  - [How To Contribute](#how-to-contribute)
  - [Tests](#tests)
  - [License](#license)
  - [Questions](#questions)


## Installation

  Within your CLI (Command Line Interface) of choice (in this case, VS Code), ensure that Node.js is installed. Do this by running the command <code>npm -v</code>. This should display the version of node installed on your local system.<br> If none is installed, and you have the latest version of JavaScript, run the command <code>npm -i</code> This should also install <code>inquirer@8.2.4</code>.<br>If issues persist, please visit Node.js.org, and follow their technical write-ups for more information.


## Usage

To view the finished product, clone the repository from my GitHub repository at this <a href="https://github.com/mighty-little-coder/Employee-Tracker-Tables">link!</a><br>
Click the <code>Code</code> button on the top right of the repository area, select the <code>SSH</code> option. This will copy the SSH link to your clipboard. In your CLI, input <code>git clone git@github.com:mighty-little-coder/Employee-Tracker-Tables.git</code> to download the working files for this project.<br>
Now in the terminal, run the command <code>node server.js</code> and follow the prompts based on your desired input.<br>
For en example, see the attached video file:<br>
![Employee Tracker Application in action!](./media/employee_tracker_demo.mp4)


## Features

Within this application, there are options to view, add, delete, filter, and update the various tables within the schema file using pre-set information stored in the seeds file. This includes the ability to have the application calculate the entirety of the company's resources being allocated to a single department (This was a bonus for the project).


## Credits

### Collaborators:
<li>UCONN Full Stack Flex Coding Program - Instructor: Lee Warrrick <a href="https://leewarrick.com/">Personal Portfolio</a></li>
<li>UCONN Full Stack Flex Coding Program - Instructor: Mia Ciasullo <a href="https://github.com/miacias">GitHub Portfolio</a></li>
<li>UCONN Full Stack Flex Coding Program - Tutor: Dennis Itua <a href="https://github.com/Dennis-The14th-web">GitHub Portfolio</a></li>
<li>UCONN Full Stack Flex Coding Program - Student: Samantha Ashley Rose <a href="https://github.com/samanthashleyrose">GitHub Portfolio</a></li>
<li>UCONN Full Stack Flex Coding Program - Student: Ronald Martin <a href="https://github.com/RonaldMartin02">GitHub Portfolio</a></li>


### References:
<li><a href="https://chat.openai.com/">ChatGPT 3.5</a></li>
<li><a href="https:///www.w3schools.com/">W3Schools</a></li>
<li><a href="https://github.com/ThomasCalle">Thomas Calle</a></li>
<li><a href="https://dev.mysql.com/">dev.MySQL</a></li>


## License

This project is licensed under the <a href="https://opensource.org/licenses/MIT">MIT LICENSE</a> - see the [LICENSE](./LICENSE) file on OpenSourceInitiative.org for details.


## Questions

For further questions, please connect with me at <a href="https://github.com/mighty-little-coder">mighty-little-coder</a>,<br> or contact me via email at <a href="email@email.com">email@email.com</a>.