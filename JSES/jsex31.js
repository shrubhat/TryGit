function reverse(str){
   let a = "";
    for (i= str.length-1; i>=0;i--){
        console.log(i);
        a+=str[i];
    }
    console.log(a);
    console.log( str.split('').reverse().join(''));

}
reverse("shru");