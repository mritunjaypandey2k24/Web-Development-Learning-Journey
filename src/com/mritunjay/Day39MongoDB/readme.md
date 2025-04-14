1. What is mongoose?
   Mongoose
   A library that creates a connection between MongoDB & Node.js JavaScript Runtime
   Environment
   It is an ODM (Object Data Modeling) Library in npm.
2. 
2. Install mongoose
         `npm init -y
          npm i mongoose`
3. Schema
Schema defines the shape of the document within that collection.
![img.png](img.png)

The Schema Type are
String
Number
Date
Buffer
Boolean
Mixed
Objectid
Array
Decimal128
Map
UUID

4. Models
Model in mongoose is a class with which we construct documents

5. INSERT 
Inserting One
![img_1.png](img_1.png)

6. Inserting Many
![img_3.png](img_3.png)
![img_2.png](img_2.png)

7. FIND
   Model.find() //returns a Query Object (thennable)
   *Mongoose Queries are not promises. But they have a .then( )

![img_4.png](img_4.png)

8. Update 
![img_5.png](img_5.png)

UpdateOne only updates the first document from all filtered document where as UpdateMany updates them all

9. Find And Update
Model.finsOneAndUpdate()
![img_6.png](img_6.png)
Model.finsByIdAndUpdate()

10. DELETE
Model.deleteOne() //return Count


to see what is being deleted
![img_7.png](img_7.png)

11. Schema Validations
Basically constraints or Rules for Schema like in sql
![img_8.png](img_8.png)

lets make a data base name amazon for amazon
![img_9.png](img_9.png)

required in mongo == NOT NULL in SQL