var shru = require('fs');
console.log("before reading a file");

console.log("Going to get a file")
var file = shru.readFileSync('.\\MEAN\\app.js');
console.log("Completed reading the file!! Info:  \n"+file);

console.log("End of file");