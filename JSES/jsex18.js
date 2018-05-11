// let userName = 'John';

// function showMessage() {
//   userName = "Bob"; // (1) changed the outer variable//didnt use 'let' so output will be bob once the function called.

//   let message = 'Hello, ' + userName;
//   console.log(message);
// }

// console.log( userName ); // John before the function call

// showMessage();

// console.log( userName );




// let userName = 'John';

// function showMessage() {
//   let userName = "Bob"; // declare a local variable

//   let message = 'Hello, ' + userName; // Bob
//   console.log(message);
// }

// // the function will create and use its own userName
// showMessage();

// console.log( userName );


// function showMessage(name , text = "No text given"){

//   console.log("hi "+ name + " text given: "+text);

// }

// showMessage("shruti" , "Learning FUNCTION in JS");

// showMessage("shruti");

// function shru(){
//   console.log("hi");
//   return;
// }

// console.log(shru() === undefined);
// shru();



// function ask(question, yes, no) {
//   if (confirm(question)) yes() //if (confirm(question)) {yes()}
//   else no();
// }

// function showOk() {
//   alert( "You agreed." );
// }

// function showCancel() {
//   alert( "You canceled the execution." );
// }

// // usage: functions showOk, showCancel are passed as arguments to ask
// ask("Do you agree?", showOk, showCancel);

//Arrow function

let sum =(a ,b)=> a+b;

console.log(" sum of A+B is: "+sum(2,3));




