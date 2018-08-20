function fact_num(a){
    if ( a == 0){
        return 1;
    }
    else if(a==1){
        return 1;
    }
    else{
        return ( a * fact_num(a-1));
    }
}
var b = fact_num(6);
console.log(b);

