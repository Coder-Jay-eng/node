var http = require('http'); // includes the http module

var fs = require('fs'); // includes the file system module

http
  .createServer(function (req, res) {
    //creates a server object
    fs.readFile('file1.html', function (err, data) {
      // reads the file file1.html
      if (err) {
        // returns error message if file does not exist
        res.writeHead(404, { 'Content-Type': 'text/html' });
        return res.end('Ooops, filename not found!'); // error message
      }

      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data); // displays the content of the file if file exists
      return res.end();
    });
  })
  .listen(8080);
