function longest(sen){
    let longst = "";
    let str = sen.split(" ");
    
    console.log(str);
    for(let i = 0;i< str.length;i++){
        if(str[i] - str[i+1] == 1){
           longst = str[i+1];
        }
        else longest= str[i];
    }
    console.log(longst)
}
longest("I Love Batman");