var http = require('http');
var fs = require('fs');

http
  .createServer(function (req, res) {
    fs.open('newfile2.txt', 'w', function (err, file) {
      /*creates empty file.
        The empty file is for writing because of the 'w' flag
        */
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/html' });

        console.error('File already exists!');

        return res.end('File already exists!');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });

        console.log('File successfully created!');

        return res.end('File successfully created');
      }
    });
  })
  .listen(8080);
