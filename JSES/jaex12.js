//  var 

length = 20;
    
    function fn(){
       console.log(this.length);
    }
    
    var obj={
        length : 5,
        method : function(fn){
            fn();
            arguments[0]();
        }
    };

    obj.method(fn,2,3);


// var length = 10;
// function fn() {
// 	console.log(this.length);
// }

// var obj = {
//   length: 5,
//   method: function(fn) {
//     fn();
//     arguments[0]();
//   }
// };

// obj.method(fn, 1);