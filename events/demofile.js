// every action on a computer is an event

var fs = require('fs');
var rs = fs.createReadStream('./demofile.txt');
rs.on('open', function () {
  console.log('Congratulations, the file is open');
});
