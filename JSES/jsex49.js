function CheckNums(num1,num2){
    // if(num2 > num1)
    // {
    //     return true;
    // }
    // else if(num2 == num1){
    //     return "-1";
    // }
    // else return false;

    return ((num2 == num1) ? "-1" : (num2 > num1) ? true : false)

}

var z = CheckNums(4,5)
console.log(z);