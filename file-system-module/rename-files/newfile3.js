var http = require('http');
var fs = require('fs');
http
  .createServer(function (req, res) {
    fs.appendFile('newfile3.txt', 'This is a new File!', function (err) {
      //creates a new file newfile3.txt, with the text 'This is a new File!'
      if (err) throw err;
      console.log('Congratulations, new file created successfully!'); // prints this upon sucessfully creating the file
    });
  })
  .listen(8080);
