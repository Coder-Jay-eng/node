/*
 fs.open() method takes a flag as the second arg, 'w' for writing
If file does not exist, new empty file created
*/

var http = require('http');
var fs = require('fs');

http
  .createServer(function (req, res) {
    fs.open('newfile2.txt', 'w', function (err, file) {
      /*creates empty file.
        The empty file is for writing because of the 'w' flag
        */
      if (err) throw err;
      console.log('New file created succesfully!');
    });
  })
  .listen(8080);
