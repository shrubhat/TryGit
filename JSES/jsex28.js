function pow(x,num){
   
  if(num==0) {  return 1; }
  else{ return x * pow(x,num-1);}


};
console.log(pow(2,4));