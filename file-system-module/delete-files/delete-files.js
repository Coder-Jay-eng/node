// fs.unlink() method deletes specified files in the File System Module

var http = require('http');
var fs = require('fs');

http
  .createServer(function (req, res) {
    fs.unlink('newfile2.txt', function (err) {
      // deletes newfile2.txt.
      if (err) {
        console.error('File does not exist');
      } else {
        console.log('File has been deleted succesfully!');
      }
    });
  })
  .listen(8080);
