var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hellow World!');
}).listen(8080);
 
// displays Hellow world on the browser after initialising