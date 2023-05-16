// split the query string into readable parts

var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
        // use the url module to turn the querystring into an object
    var q = url.parse(req.url, true).query;
        // Returns the year and month from the query object
    var txt = q.year + " born in the month of " + q.month;
    res.end(txt);
}).listen(8080);


/* the address http://localhost:8080/?year=2000&month=March will produce
 2000 born in the month of March */