var http = require('http');
var uc = require('upper-case');
http
  .createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(
      uc.upperCase(
        'This is an npm module. A package is read for use once installed'
      )
    );
    res.end();
  })
  .listen(8080);
