/*
The fs.writeFile method replaces the specified file and content if it exists.
If file does not exist, a new file, containing the specified content, is created
*/

var http = require('http');
var fs = require('fs');

http
  .createServer(function (req, res) {
    fs.writeFile(
      'newfile3.txt',
      'Hello. Here is some new content',
      function (err) {
        /*creates new file newfile3.txt.
        The new file contains the string in the second argument
        */
        if (err) throw err;
        console.log('New file has been created succesfully!');
      }
    );
  })
  .listen(8080);
