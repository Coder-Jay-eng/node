// fs.unlink() method deletes specified files in the File System Module

var http = require('http');
var fs = require('fs');

http
  .createServer(function (req, res) {
    fs.unlink('newfile2.txt', function (err) {
      // deletes newfile2.txt.
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/html' });

        console.error('File does not exist!');

        return res.end('File does not exist!');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });

        console.log('File has been deleted succesfully!');

        return res.end('File has been deleted succesfully!');
      }
    });
    return res.end;
  })
  .listen(8080);
