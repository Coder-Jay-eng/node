var http = require('http');
var fs = require('fs');

http.createServer(readFileServer).listen(8080);

function readFileServer(req, res) {
  // const query = req.url;

  fs.readFile('demofile1.html', function (err, data) {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/html' });
      console.error('Oooops! Filename not found');
      return res.end('Filename not found');
    }
    res.writeHead(200, { 'Content-Type': 'text/html' });
    console.log(req.url);
    res.write(data);
    return res.end();
  });
}

// fs.readfile displays the contents of the file, throws an error message if file does not exist.
