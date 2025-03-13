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

GET     /posts          to get data for all posts (INDEX)

POST    /posts          to add a new post (CREATE)

GET     /posts/:id      to get one post (using id)  (VIEW)

PATCH   /posts/:id      to update specific post (UPDATE)

DELETE   /posts/:id     to delete specific post (DESTROY)



//4 Implement : GET /posts

Index Route
GET      /posts      to get data for all posts

here /posts   where resource is the posts
where posts is a noun and not verb

//5 Implement : POST /posts
Create Route

POST    /posts      to add a new post

to create a new post we have to add 2 routes
1. we have to get at backend username and its content from form 
2. POST (we accept a post request which add the new post in our database or array(Here))

2 routes

• Serve the form        GET     /posts/new

• Add the new post.      POST    /posts

//6. Redirect
    res.send(URL) -> tp send text,html,object
    res.render(URL); -> to render ejs template page
    res.redirect(URL); -> after post is submitted it redirect to main page

//Till Now we have AAdded a functionality that in all post page we can see the create post link
// from their we can go to the form to create new post and after clicking submit
//it sends a post request to backend which redirect us back to the main page of all posts

//7. Implement : GET /posts/:id
Show/view  Route

GET           /posts/:id          to get one post (using id)

//8. Create id for Posts

UUID Package
Universally unique identifier

npm install uuid

require the package and then write uuidv4() where you want the unique code



//8. Implement : PATCH /posts/:id
Update Route

PATCH           /posts/:id          to update specific post

//9.Update route

//10. Edit Route : Create Form for Update
Edit Route
Serve the edit form     GET     /posts/:id/edit


here after all changes we can edit the post but in html there are only get and post methods

so we use method-override package ans use query over ride

//11. Destroy Route

Implement     /posts/:id

Destroy Route

DELETE      /posts/:id       to delete specific post










