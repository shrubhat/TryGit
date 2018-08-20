var shru = require('fs');
// var file = " ";
// console.log(file);


console.log("before reading a file");

console.log("Going to get a file");

var rfilevalue = false;

var readingfile = function(){
    console.log("Completed reading the file!! \n");
     return rfilevalue=true;
}

var file = shru.readFile('.\\MEAN\\app.js',readingfile);

console.log("End of file");

while(rfilevalue==true){
        console.log( "writing the file content: \n"+shru.writeFileSync(file,"writing file app.js"));
}

// do{
//     console.log( "writing the file content: \n"+file);
// }while(rfilevalue==true);