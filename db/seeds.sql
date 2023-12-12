INSERT INTO department (name)
VALUES  ("Engineering"),
        ("Sales"),
        ("Assembly"),
        ("Service");

INSERT INTO role (title, salary, department_id)
VALUES  ("Mechanical Engineer", 80000, 1),
        ("Electrical Engineer", 95000, 1),
        ("Test Engineering", 90000, 1),
        ("Engineering Lead", 140000, 1),
        ("Government Contracts", 120000, 2),
        ("Private Contracts", 110000, 2),
        ("Hydraulic Assembly", 55000, 3),
        ("Electrical Assembly", 55000, 3),
        ("Assembly Lead", 75000, 3),
        ("Customer Service", 80000, 4),
        ("Financial Planning", 80000, 4),
        ("Service Technician", 75000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES  ("Anthony", "Maddatu", 1, null),
        ("Beserta", "Qorri", 2, null),
        ("Blake", "Skor", 3, null),
        ("Charles", "Gillespie", 4, null),
        ("Christopher", "Rice", 5, null),
        ("Christopher", "Tello", 6, null),
        ("Dakota", "Blanchard", 7, null),
        ("Evan", "Bennett", 7, null),
        ("Jacob", "Ofsuryk", 7, null),
        ("Jeremy", "Doran", 8, null),
        ("Jon", "White", 8, null),
        ("Lee", "Warrick", 9, null),
        ("Lewis", "Sinche", 10, null),
        ("Louis", "Taylor", 11, null),
        ("Luis", "Ferreira", 11, null),
        ("Mia", "Ciasullo", 12, null),
        ("Michael", "Krahn", 12, null),
        ("Nicole", "Choinier-Kroeker", 9, null),
        ("Remi", "Goddu", 5, null),
        ("Robert", "Totten", 1, null),
        ("Ronald", "Martin", 2, null),
        ("Sam", "Rose", 3, null),
        ("Sanjida", "Nawrin", 6, null),
        ("Shantrell", "Jenkins", 10, null);

UPDATE employee
SET manager_id = 4
WHERE role_id IN (1, 2, 3);

UPDATE employee
SET manager_id = 9
WHERE role_id IN (7, 8);
