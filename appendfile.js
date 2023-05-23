/*
fs.appendFile() appends specific content to a file, creates the file if not existent.
*/

var fs = require('fs');

fs.appendFile('mynewfile1.txt', 'Hello content!', function(err) {
   if (err) throw sorry;
   console.log('done!')
});