"use strict";
function Vehicle(Vehicle_No, color){
         
    if(!new.target){
        return new Vehicle(Vehicle_No, color);
    }
    else{
        this.Vehicle_No = Vehicle_No;
        this.color = color;
    }

  this.abc = function(){//function in constructor should have 'this'
      return(this.Vehicle_No + "  "+ this.color);
    }
}

let bus = Vehicle("KA1879" , "red");


let car = new Vehicle("KA9977" , "black");

console.log(bus.abc());

console.log(car.abc());

// function User(name) {
//     if (!new.target) { // if you run me without new
//       return new User(name); // ...I will add new for you
//     }
  
//     this.name = name;
//   }
  
//   let john = User("John"); // redirects call to new User
//  console.log(john.name); // John
