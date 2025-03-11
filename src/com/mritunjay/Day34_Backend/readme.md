//1. what is Rest?
REST - Representational State Transfer
REST is an architectural style that defines a set of constraints to be used for creating web services.

//We are building a working and function page for posts  where we can create,delete post,
view all post at once or individually, edit those post using different apis

//CRUD(DB)-> Create Read Update Delete
//We use our Restful APIs for this CRUD Operation


//2. CRUD Operations

GET retrieves resources.
POST submits new data to the server
PUT updates existing data
PATCH update existing data partially
DELETE removes data

for our quora post we want 
each post has-> username, content
also -> view all post, individual post, Edit it, Delete it

Here we Perform Crud on resources and the resource is post

//3. Creating RESTful APIs

GET     /posts          to get data for all posts

POST    /posts          to add a new post

GET     /posts/:id      to get one post (using id)

PATCH   /posts/:id      to update specific post

DELETE   /posts/:id     to delete specific post



//4 Implement : GET /posts

Index Route
GET      /posts      to get data for all posts

here /posts   where resource is the posts
where posts is a noun and not verb












