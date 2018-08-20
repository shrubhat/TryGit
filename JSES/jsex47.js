function SimpleAdding(num){
    let sum = 0;
    for(let i = 0;i<=num;i++){
        sum+=i;
    }
    return sum;
}

let a = SimpleAdding(5);
console.log(a);