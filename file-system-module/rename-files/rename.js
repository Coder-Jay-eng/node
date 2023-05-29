// the fs.rename() method is used to rename the specified file

var http = require('http');
var fs = require('fs');
http
  .createServer(function (req, res) {
    fs.rename('Mynewfile.txt', 'Mynewrenamedfile.txt', function (err) {
      //renames Mynewfile.txt to Mynewrenamedfile.txt
      if (err) {
        console.error('File already renamed!');
      } else {
        console.log('Yippeeeee, file renamed successfully!'); // prints this upon sucessfully creating the file
      }
    });
  })
  .listen(8080);
