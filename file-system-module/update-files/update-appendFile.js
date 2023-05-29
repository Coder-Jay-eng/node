// fs.appendFile() method appends specified content to the end of the file

var http = require('http');
var fs = require('fs');

http
  .createServer(function (req, res) {
    fs.appendFile(
      'newfile1.txt',
      'This is an updated text in the file',
      function (err) {
        if (err) throw err;
        console.log('File successfuly updated');
      }
    );
  })
  .listen(8080);
