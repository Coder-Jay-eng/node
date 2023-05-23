var http = require('http');
var fs = require('fs');

http
  .createServer(function (req, res) {
    fs.open('newfile2.txt', 'w', function (err, file) {
      /*creates empty file.
        The empty file is for writing because of the 'w' flag
        */
      if (err) {
        console.error('file already exists!');
      } else {
        console.log('New file created succesfully!');
      }
    });
  })
  .listen(8080);
