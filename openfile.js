/*
fs.open() takes a flag as a second argument.
If the flag is 'w' for writing, file created is for writing.
Else creates empty file
*/

var http = require('http');
var fs = require('fs');

fs.open('mynewfile.txt', 'w', handleFileError).listen(8080);

function handleFileError(err, file) {
  if (err) {
    console.error(err);
    throw new Error('sorry ', err.message);
  } else {
    console.log(file);
  }
}
