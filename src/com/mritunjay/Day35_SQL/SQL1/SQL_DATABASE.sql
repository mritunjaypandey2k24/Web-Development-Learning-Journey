USE instagram;

CREATE TABLE user (
 id INT ,
 age INT,
 name VARCHAR(30) NOT NULL,
 email  VARCHAR(50) UNIQUE,
 followers INT DEFAULT 0,
 following INT DEFAULT 0,
 CONSTRAINT  age_check CHECK(age >= 13),
 PRIMARY KEY(id)
);

INSERT INTO user 
(id, age, name, email, followers,following)
VALUES
(1,13,"adam","adam@yahoo.in",123,145),
(2,15,"bob", "bob123@gmail.com",200,200),
(3,16,"casey", "casey@gmail.com",300,306),
(4,17,"donald", "donald@gmail.com",200,105);



SELECT id,name, email FROM user;
SELECT id,name, age FROM user;
SELECT * FROM user;
SELECT DISTINCT(age) FROM user;


-- WHERE CLAUSE
SELECT name,followers
FROM user
WHERE followers >=200;

SELECT name,age,followers
FROM user
-- WHERE age<16;
-- WHERE age+1 = 18;
-- WHERE age>15 AND followers>200;
-- WHERE age>15 OR followers>200;
WHERE age BETWEEN 15 AND 17;

SELECT name,followers,email
FROM user
WHERE email IN ("adam@yahoo.in","bob123@gmail.com","abc@gmail.com");

INSERT INTO user
(id, age, name, email, followers, following)
VALUES
(5,16,"eve", "eve@yahoo.in",400,145),
(6,16,"farah","farah@gmail.com",10000,10000);

SELECT name, age
FROM user
-- WHERE age IN (14,16);
WHERE age NOT IN (14,16);

-- LIMIT Clause
SELECT name,age,email
FROM user
WHERE age>15
LIMIT 2;

-- top3 users
SELECT name,age,email
FROM user
LIMIT 2;

-- INSERT INTO user
-- (id,age,name, email)
-- VALUES
-- (20,10,"random","bob123@gmail.com");




CREATE TABLE post(
 id INT PRIMARY KEY,
 content VARCHAR(100),
 user_id INT,
 FOREIGN KEY (user_id) REFERENCES user(id)

);

INSERT INTO post
(id,content,user_id)
VALUES
(101,"Hello World",3),
(102,"Bye Bye",1),
(103, "Hello Delta", 3);

SELECT * FROM post;