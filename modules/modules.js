var http = require('http');
var dt = require('./myfirstmodule'); // ./is used to locate the module

http
  .createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('The date and time today is: ' + dt.myDateTime());
    res.end();
  })
  .listen(8080);
