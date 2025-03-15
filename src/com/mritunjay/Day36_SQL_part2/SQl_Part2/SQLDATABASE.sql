/*
ORDER BY Clause
*/

USE instagram;

SELECT *
FROM user;

-- ascending order
select name,age,followers
from user
order by followers asc;

-- descending order
select name,age,followers
from user
order by followers desc;


-- Aggregate Functions
select max(followers)
from user;

SELECT MAX(age)
FROM user;

SELECT COUNT(age)
FROM user
WHERE age=16;

SELECT min(age)
FROM user;

select avg(age)
from user;

select sum(followers)
from user;


-- GROUP BY
SELECT age, count(id)
FROM user
GROUP BY age;

SELECT age, max(followers)
FROM user
GROUP BY age;

-- HAVING clause

SELECT age, MAX(followers)
FROM user
GROUP BY age
HAVING max(followers)>150;

-- General Order

SELECT age, max(followers)
FROM user
GROUP BY age
HAVING max(followers)>150
ORDER BY age DESC;

-- UPDATE CLAUSE
SET SQL_SAFE_UPDATES = 0;

UPDATE user 
SET followers = 600
WHERE age = 16;

SELECT * FROM user;

-- DELETE clause

DELETE FROM user
WHERE age=17;

SELECT * FROM user;

-- ALTER TABLE

-- add a city column in user

ALTER TABLE user
ADD COLUMN city VARCHAR(25) DEFAULT "Delhi";

SELECT * FROM user;

-- delete a column

ALTER TABLE user
DROP COLUMN city;

-- rename table name

ALTER TABLE user
RENAME TO instaUser;

-- select * from user;  give error as name of table is instaUser

select * from instaUser;


ALTER TABLE instaUser
RENAME TO user;

-- CHANGE Column name

select * from user;

ALTER TABLE user
CHANGE COLUMN followers subs INT DEFAULT 0;

-- MODIFY Column (modify datatype/ constraint)

ALTER TABLE user
MODIFY subs INT DEFAULT 5;

INSERT INTO user
(id, age, name , email, following)
VALUES( 7, 19,"gemini","gem@yahoo.in", 120);

SELECT * FROM user;

-- TRUNCATE Table

DROP TABLE post;

TRUNCATE TABLE user;

select * from user;

DROP TABLE user;

select * from user; -- will give error














