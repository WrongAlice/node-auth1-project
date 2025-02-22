# Introduction to Authentication Module Project

## Introduction

Use `Node.js`, `Express` and `Knex` to build an API that provides register, login and logout functionality.

## Instructions

### Task 1: Project Setup and Submission

Your assignment page on Canvas should contain instructions for submitting this project. If you are still unsure, reach out to School Staff.

### Task 2: Minimum Viable Product

#### 2A - Database Access Functions

Write the following user access functions inside `api/users/users-model.js`:

- [ ] `find`
- [ ] `findBy`
- [ ] `findById`
- [ ] `add`

#### 2B - Middleware Functions

Write the following auth middlewares inside `api/auth/auth-middleware.js`:

- [ ] `restricted`
- [ ] `checkUsernameFree`
- [ ] `checkPasswordLength`
- [ ] `checkUsernameExists`

#### 2C - Endpoints

Authentication will be tracked using sessions and cookies. See `api/server.js` for more instructions.

Write the following endpoints. The first one belongs inside `api/users/users-router.js` and the rest inside `api/auth/auth-router.js`:

- [ ] `[GET] /api/users`
- [ ] `[POST] /api/auth/register`
- [ ] `[POST] /api/auth/login`
- [ ] `[GET] /api/auth/logout`

#### Users Schema

The database `auth.db3` includes a single `users` table:

| field    | data type        | metadata                                      |
| :------- | :--------------- | :-------------------------------------------- |
| user_id  | unsigned integer | primary key, auto-increments, generated by db |
| username | string           | required, unique                              |
| password | string           | required                                      |

#### Notes

- Run tests locally executing `npm test`.
- The project comes with `migrate`, `rollback` and `seed` scripts in case you need to reset the database.
- You are welcome to create additional files but **do not move or rename existing files** or folders.
- Do not alter your `package.json` file except to install extra libraries or add extra scripts. Do not update existing libraries.
- In your solution, it is essential that you follow best practices and produce clean and professional results.
- Schedule time to review, refine, and assess your work.
- Perform basic professional polishing including spell-checking and grammar-checking on your work.

### Task 3: Stretch Goals

- Build a React application that implements components to register, login and view a list of users. Gotta keep sharpening your React skills.
<!-- 

Web Foundations:
Describe between semantic and presentational markup? the difference between semantic and presentational markup is that semantic markup is used to describe the content of a page while presentational markup is used to describe the layout of a page.

What does the cascade in CSS mean? cascade in css means that the properties of a parent element are applied to all of its children.

Next Level: Difference between display inline and block? the difference btween display inline and block is that display inline is used to display the element inline while block is used to display the element as a block element.

What is GIT used for and how do teams use it? GIT is used for version control and teams use it to collaborate on projects.

What are some features of a fully responsive website? A fully responsive website is a website that is responsive to all screen sizes.   another feature of a fully responsive website is that it is mobile first. 

Why is the viewport meta tag important? the viewport meta tag is used to specify the width of the viewport.

Why are breakpoints valuable to responsive web design? breakpoints are valuable to responsive web design because they allow us to create responsive web design that is adaptable to different screen sizes.

What does mobile first mean to you? mobile first means that the website is designed to be viewed on mobile devices first.

What is a mixin and why is it useful in pre-processing? a mixin is a reusable code that can be used in multiple places.

What is an import in pre-processing? an import in pre processing is a way to import a file into a file.

What is the difference between a rem and an em? the difference between a rem and an em is that a rem is a relative measurement while an em is an absolute measurement.

Differences between let and var? the difference between let and var is that let is a block scoped variable while var is a function scoped variable.

What is the difference between a function declaration and function declaration and an arrow function? the difference between a function declaration and function declaration and an arrow function is that a function declaration is a function that is defined with the function keyword while a function declaration is a function that is defined with the function keyword.

Difference between a method and function? the difference between a method and function is that a method is a function that is defined inside a class while a function is a function that is defined outside of a class.

Difference between callback and higher order function?  the difference between callback and higher order function is that callback is a function that is passed as an argument to another function while a higher order function is a function that is passed as an argument to another function.

Why is everything in JS an object?  everything in JS is an object because everything in JS is an object.
it is an object oriented programming language.

Describe the this keyword?  this is a keyword that is used to refer to the current object.


