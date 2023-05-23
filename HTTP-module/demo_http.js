var http = require('http'); // to include the HTTP module, use require(HTTP)

// create a server object:

http
  .createServer(function (req, res) {
    // include HTTP header
    res.writeHead(200, { 'Content-Type': 'text/html' }); // status code: 200 = OK, object containing response headers
    res.write('Hello viewer!'); //write a response to the client
    res.end(); //end the response
  })
  .listen(8080); //the server object listens on port 8080
