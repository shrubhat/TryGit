function KaprekarsConstant(num){
    var conv1 = "";
    for(let i = 0; i < num.length; i++){
        if(num[i] < num[i+1]){
          conv1 += num[i];  
        }
        
    }

    return conv1;
}

var b =  KaprekarsConstant("shruti");

console.log(b);