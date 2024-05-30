// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Create a route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Listen on port 3000
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
 
 This code will create a simple web server that listens on port 3000 and responds with “Hello World!” when you visit  http://localhost:3000/. 
 Run the server with the following command: 
 node comments.js
 
 You should see the following output: 
 Server is running on http://localhost:3000
 
 Now open your browser and visit  http://localhost:3000/. You should see the “Hello World!” message. 
 Now let’s add comments to the code. 
 Single-line comments 
 Comments in JavaScript start with two forward slashes ( // ) and continue until the end of the line. 
 The following code shows how to add a single-line comment in JavaScript: 
 // This is a single-line comment
console.log('Hello World!');
 
 Multi-line comments 
 Multi-line comments in JavaScript start with  /*  and end with  */ . 
 The following code shows how to add a multi-line comment in JavaScript: 
 /*
This is a multi-line comment
It can span multiple lines
*/
console.log('Hello World!');
 
 Comments can also be used to disable code. 
 The following code shows how to disable code using comments in JavaScript: 
 // console.log('Hello World!');
 
 This code will not be executed because the  console.log()  statement has been commented out. 
 Conclusion 
 In this article, you learned how to add comments in JavaScript. Comments are a great way to document your code and make it more readable. 
 Thanks for reading! 
 If you found this article useful, take a look at the following articles: 
 
 JavaScript: Find the Max and Min of an Array
 How to Sort an Array in JavaScript
 JavaScript: Check if a Variable is an Array
 JavaScript: Check if a Variable is a String
 
 You can also check our  JavaScript category page for the latest tutorials and examples.

