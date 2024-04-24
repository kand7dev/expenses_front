# Special-Topics-in-Software-Engineering

This is an Expenses application created by me, grandvx and Antonisvar for a university project in the course of Special Topics in Software Engineering.
   
## Description

This repository contains the frontend code for the Expenses application, a full-stack React and .NET application designed to help users keep track of their expenses.
We have designed and developed a business application of CRUD type, three levels (front-end, business logic, database) on a small scale. By "small scale" we mean that it is not necessary to deal with all possible functions of such an application but to select 3-4 of those that are important. The aim of the task is not only the software to be produced but also the development methodology.

## Overview

The Expenses frontend is built using React - Redux. It interacts with the backend API built with .NET Core to provide users with seamless functionality for managing their expenses.
You can sign up as a new user, or you can even sign in with your Google Account.

## A. Development Methodology

Τhe design and development should follow the principles of agile development i.e. at a minimum, the requirements will be in user stories, there should be a product backlog and a board for each sprint.
The tool that we will use for project management (in their free version) is Trello.

## B. System Architecture

As mentioned above, our application will have three layers (front-end, business logic, database).
The constraints we follow are
(a) The front-end will communicate with the business logic using RESTful web services
(b) The business logic is based on an object-oriented language programming language
(c) The database must be relational and
(d) The business logic must communicate with the database via ORM.


## Technologies Used

* React
* Redux (for managing state)
* React Router
* Axios (for making API requests)

## Setup Instructions

1. Clone this repository to your local machine.
2. Navigate to project directory.
3. Install dependencies by running 'npm install'.
4. Start the development server by running 'npm start'.
This will start the React development server on port 3000. You can access the application at http://localhost:3000/.
