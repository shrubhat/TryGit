var express = require('express');
var path = require('path');

var app = express();

app.set('port', 3000);
app.get('/' , function(req, res){
    console.log("get the home page");
    res
    .status(200)
    .sendFile(path.join(__dirname, "public", "index.html"))
})

app.get('/json' , function(req, res){
    console.log("get the JSON data");
    res
    .status(200)
    .json({ "jsonfile":true});
})

app.get('/file', function(req, res){
    console.log("get the file");
    res
    .status(200)
    .sendFile(path.join(__dirname, "app.js"))
})
var server = app.listen(app.get('port'), function(){
    var port = server.address().port
    console.log("Listening on port No: "+port);
});