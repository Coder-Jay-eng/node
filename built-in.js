// URL module splits up a web address into readable parts

var url = require('url'); // includes the url module
var adr = 'http:localhost:8080/default.htm?year=2000&month=march';
var q = url.parse(adr, true); //returns object with url roperties

console.log(q.host); //returns 'localhost:8080'
console.log(q.pathname); //returns '/default.htm'
console.log(q.search); //returns '?year=2000&month=march'

var qdata = q.query; //returns an object: { year: 2017, month: 'march' }
console.log(qdata.month); //returns 'march'
