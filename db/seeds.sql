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
VALUES  ("Anthony", "Maddatu", 1, 4),
        ("Beserta", "Qorri", 2, 4),
        ("Blake", "Skor", 3, 4),
        ("Charles", "Gillespie", 4, null),
        ("Christopher", "Rice", 5, null),
        ("Christopher", "Tello", 6, null),
        ("Dakota", "Blanchard", 7, 9),
        ("Evan", "Bennett", 7, 9),
        ("Jacob", "Ofsuryk", 7, 9),
        ("Jeremy", "Doran", 8, 9),
        ("Jon", "White", 8, 9),
        ("Lee", "Warrick", 9, null),
        ("Lewis", "Sinche", 10, null),
        ("Louis", "Taylor", 11, null),
        ("Luis", "Ferreira", 11, null),
        ("Mia", "Ciasullo", 12, null),
        ("Michael", "Krahn", 12, null),
        ("Nicole", "Choinier-Kroeker", 9, null),
        ("Remi", "Goddu", 4, null),
        ("Robert", "Totten", 1, 4),
        ("Ronald", "Martin", 2, 4),
        ("Sam", "Rose", 3, 4),
        ("Sanjida", "Nawrin", 6, null),
        ("Shantrell", "Jenkins", 10, null);


