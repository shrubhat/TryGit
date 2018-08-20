function SimpleSymbols(str){
     
    for(var i = 0; i < str.length; i++){
        if(str[i].match(/[a-z]/i) !== null){
            if(str[i-1] !== '+' || str[i+1] !== '+')
                {
                    return false;
                }
        } 
    }   
    return true;
}

let b = SimpleSymbols('s+=+h+r+u+=+t+=+i');
console.log(b);