var a=5;

var fun=function()
{
    var inner=5;
    return a+inner;
}

console.log(fun());
var a=10;
console.log(fun());

var x=5;

if(x=="6"){
    console.log("x=5");
}
if(x==="5")
{
    console.log("x=5");
}
else{
    console.log("x !='5'");
}
