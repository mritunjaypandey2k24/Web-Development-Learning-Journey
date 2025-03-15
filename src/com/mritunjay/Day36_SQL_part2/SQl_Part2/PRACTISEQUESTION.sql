CREATE DATABASE IF NOT EXISTS college;

USE college;

CREATE TABLE Teacher(
 id INT PRIMARY KEY,
 name VARCHAR(50) NOT NULL,
 subject VARCHAR(10) NOT NULL,
 salary INT
);

INSERT INTO Teacher
(id, name, subject, salary)
VALUES
(23,"ajay","math",50000),
(47,"bharat", "english", 60000),
(18, "chetan","chemistry",45000),
(9,"divya","physics",75000);

SELECT * FROM Teacher;

-- Q1 Select teachers whose salary is more than 55K

SELECT name
FROM Teacher
WHERE salary>55000;

-- Q2 Rename the salary column of teacher table to ctc
ALTER TABLE Teacher
CHANGE COLUMN salary ctc INT;

SELECT * FROM Teacher;

-- Q3 Update salary Of all teachers by giving them an increment Of 25%

UPDATE Teacher
SET ctc = 1.25*ctc;

-- Q4 Add a new column for teachers called city. The default city should be "Gurgaon"

ALTER TABLE Teacher
ADD COLUMN city VARCHAR(10) DEFAULT "Gurgaon";

SELECT * FROM Teacher;

-- Q5 Delete the salary column for teacher table

ALTER TABLE Teacher
DROP COLUMN ctc;

SELECT * FROM Teacher;

-- Problem 2.

CREATE TABLE student(
roll_no INT PRIMARY KEY,
name VARCHAR(30),
city VARCHAR(30),
marks INT
);

INSERT INTO student
(roll_no, name, city, marks)
VALUES
(110,"adam", "Delhi", 76),
(108, "bob", "Mumbai", 65),
(124, "casey", "Pune", 94),
(112, "duke", "Pune", 80);

SELECT * FROM student;

-- Q1 Select all students who scored 75+

SELECT name
FROM student
WHERE marks>75;

-- Q2 Find names of all cities where students are from
SELECT DISTINCT city
FROM student;

-- Q3 Find the maximum marks of students from each city

SELECT city, MAX(marks)
FROM student
GROUP BY city;
 
-- Q4 Find the average of the class

SELECT AVG(marks)
FROM student;

-- Q5 Add a new column grade, assign grade such that :
-- marks > 80, grade = O
-- marks 70-80, grade = A
-- marks 60-70, grade = B

ALTER TABLE student
ADD COLUMN grade VARCHAR(5);

select * from student;

UPDATE student
SET grade = "O"
WHERE marks >= 80;

UPDATE student
SET grade = "A"
WHERE marks >=70 AND marks <80;

UPDATE student
SET grade = "B"
WHERE marks >=60 AND marks <70;

select * from student;



