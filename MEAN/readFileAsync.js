var shru = require('fs');
var file = " "
console.log("before reading a file");

console.log("Going to get a file")

var file = shru.readFile('app.js', function(){
    console.log("Completed reading the file!! Info:  \n");
});
function printfile(){
    if(file!=""){
        console.log(file);
    }
}

console.log("End of file");
printfile();