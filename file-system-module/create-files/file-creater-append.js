// This is how to create a new file using the appendFile() method, with data(second var)
var http = require('http');
var fs = require('fs');
http
  .createServer(function (req, res) {
    fs.appendFile('newfile1.txt', 'This is a new File!', function (err) {
      //creates a new file newfile1.txt, with the text 'This is a new File!'
      if (err) throw err;
      console.log('Congratulations, new file created successfully!'); // prints this upon sucessfully creating the file
    });
  })
  .listen(8080);
