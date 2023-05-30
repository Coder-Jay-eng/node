/*
The path to the directory storing the uploaded file is in:
files object, passed as the third argument in the parse() method's callback fn
To move the file to the folder of my choice, use the file system module,
and rename the file
*/

var http = require('http');
var formidable = require('formidable');
var fs = require('fs');

http
  .createServer(function (req, res) {
    if (req.url == '/fileupload') {
      var form = new formidable.IncomingForm();
      form.parse(req, function (err, fields, files) {
        var oldpath = files.filetoupload.filepath;
        var newpath =
          'C:/Users/Your Name/' + files.filetoupload.originalFilename;
        fs.rename(oldpath, newpath, function (err) {
          if (err) throw err;
          res.write(
            'Beautiful, file has been uploaded and moved successfully!'
          );
          res.end();
        });
      });
    } else {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(
        '<form action="fileupload" method="post" enctype="multipart/form-data">'
      );
      res.write('<input type="file" name="filetoupload"><br>');
      res.write('<input type="submit">');
      res.write('</form>');
      return res.end();
    }
  })
  .listen(8080);
