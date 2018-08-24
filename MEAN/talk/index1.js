var hello = function (name){
    console.log("Hello "+name);
}

var filename = function(){
    console.log("I'm a file called 'index1.js'");
}
module.exports = {
    hello:hello,
    filename:filename
}