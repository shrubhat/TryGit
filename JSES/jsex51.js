function AlphabetSoup(str){
    // var chars = str.split("");
    // var sorted = chars.sort();
    // return sorted.join("");
    var sorted = "";
    for(var i = 0 ;i < str.length; i++){
        for(var j = i+1; j<str.length; j++){
            if(str[i] < str[j]){
             if(str[j] < str[j+1])
             sorted += str[j];
            }
            else {
                sorted += str[j+1];
            }
            }
        }
        
    return sorted;
}
var a = AlphabetSoup("alphabet");
console.log(a);