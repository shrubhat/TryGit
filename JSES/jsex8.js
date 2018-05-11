var sum=function(a,b){
    if(b !=undefined){
        return a+b;
    }
    else{ 
        return  function(b){
             return a+b;
            };
        }
}
console.log(sum(2,3));
console.log(sum(2)(3));


var su=function(x,y){
    if(arguments.length==2){
        return aruments[0]+arguments[1];
    }
    else{
        return function(y){
            return x+y;
        };
    }
}
console.log(sum(4,4));
console.log(sum(4)(4));