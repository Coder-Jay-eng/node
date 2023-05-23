// fs.writeFile()replaces the specified content of the file and content

var http = require('http');
var fs = require('fs');

http
  .createServer(function (req, res) {
    fs.writeFile('newfile3.txt', 'This is updated text.', function (err) {
      if (err) {
        console.error('File not updated!');
      } else {
        console.log('The content has been replaced successfully');
      }
    });
  })
  .listen(8080);
