// let str = "receive the code from a server dynamically";

// let func = new Function(console.log(str));
// func();

//var value = "golbal";

// function getFunc() {
//     var value = "test";
  
//     let func =  function(){console.log(value)};
  
//     return func;
//   }
  
//   getFunc()();


var value = "golbal";
function getFunc(){
    var value = "test";
    let func = new Function('value' , 'console.log(value)');
    return func;
}

//var value = "golbal";
getFunc()(value);