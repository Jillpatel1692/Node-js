const http = require("http"); // Handles REQUEST and RESPONSE in node.js

http.createServer((request, response) => {
    response.write("Hello Jill Patel");
    response.end();
  }).listen(5000);