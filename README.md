# Image Processing API

This is a project for a course that I am taking. It consists of putting together multiple things that I have learned so far.
Those things include working with NodeJS, Express, TypeScript, Jasmine and the File System module. It also utlizes standard 
industry practices such as Unit Testing, linting with ESLint and formatting with Prettier. The project serves an image based 
on file name and size the user inputs in the query string. Using the [Sharp](https://sharp.pixelplumbing.com/) library it
saves the image into a directory so that next time when the same query string is entered, the image will be served from memory. 
This is done by also using node's file system module [fs](https://nodejs.org/api/fs.html).

**EDIT**
This repo is how I originally approached this project. I created a middleware which checks if a file with the name based on the
query string already exists. If it does, the middleware serves the file with the res.sendFile by stopping the request from going 
forward. I might have overcomplicated and overthought things and I also just discovered that the built in middleware 
[express.static](https://expressjs.com/en/starter/static-files.html) works beautifully for this, without the need to re-invent the
wheel yourself. I am going to create a new repo where I will complete the project by using this built in functionality, and I 
just wanted to save this repo so I could look back at my learning experience.