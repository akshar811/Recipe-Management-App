# Recipe-Management-App

This project provides the backend API for a Recipe Management Application. 
It enables users to authenticate, create, view, update, and delete recipes. 
The API uses Node.js, Express.js, JWT for authentication, and MongoDB as the database.

Features :-
User Authentication: JWT-based authentication for user registration and login.
CRUD Operations for Recipes:
Create, Read, Update, and Delete recipes.
MongoDB Database: Recipes and user data stored with proper schema design.

Error Handling: Proper error handling for this Recipe management App

Prerequisites:-
create a .env file for environment variables with jwt or mongodb etc.

Installation :-
Install dependencies like npm i express mongoose jwt cookie-parser jsonwebtoken bcrypt.
The server should now be running at http://localhost:8000.

API Endpoints :-

Register a new user :- POST route ---  http://localhost:8000/user/signup
Login user :- Create POST Route  ---   http://localhost:8000/user/login

Recipe CRUD Endpoints:-

Create a Recipe :-  create a POST route --    http://localhost:8000/Recipe/create
Requires JWT token in the Authorization header.

Get All Recipes :-  create GET Route  ---     http://localhost:8000/Recipe/AllRecipe.

Get a Recipe by ID :- create GET Route ---    http://localhost:8000/Recipe/SingleRecipe/:id.

Update a Recipe :- create Patch / Put Route --  http://localhost:8000/Recipe/UpdateRecipe/:id.

Delete a Recipe :- create Delete Route ---    http://localhost:8000/Recipe/DeleteRecipe/:id.

Error Handling :-
400: Invalid or malformed request.
401: Unauthorized access (missing or invalid JWT token).
404: Resource not found (e.g., recipe or user).
500: Internal server error.
