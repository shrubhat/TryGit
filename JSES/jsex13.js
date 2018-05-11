var coustomer={
    name: 'Shruti',
    speak: function(){
        return( "my name is "+this.name);
    },
    address: {
        street:"Maruti Nagar",
        city: "Bangalore"
    }
};

console.log("coustomer info");
console.log(coustomer.speak());
console.log(" street: "+coustomer.address.street +" city:  "+coustomer.address.city);


//Constorctor type


function person(name, state){
    this.name=name;
    this.state=state;
     this.info=function(){
        return(this.name +" lives at "+this.state);
    }
}

var shru= new person("Shruti", "Karnataka");

console.log(shru.info());

var changeName= function(person){
    person.name = "Albert"
}
changeName(shru);

console.log("Shruti changed to "+shru.name);

var abc = new person("deepak", "Karnataka");// "new" for constructor object creation
var abcd = new  person("deepak", "Karnataka");

console.log("is abc == abcd?  " +(abc === abcd));//even though objects values are equal, object referrence is different

//PROTOTYPE

person.prototype.speak= 'Hello';
person.prototype.say = function(){
    return this.name + " says "+ this.speak;
}
var xyz = new person("john" , "CA");


console.log(xyz.say());
console.log(xyz.info());

console.log("name is property of XYZ?  "+xyz.hasOwnProperty("name"));
console.log("speak is property of XYZ? "+xyz.hasOwnProperty("speak"));


function PrivateEx(){
    var secretNum= 100;

    this.accessPrivate = function(num){
        if(num<100){
            return("Number is Greater than "+ num);
         }
        else if(num>100){
            return("Number is Lesser than "+num);
        }
        else{
            return("You have guessed it!!");
        }
    };
}

var access = new PrivateEx();

console.log("Secret number is "+ access.secretNum);

console.log("secret number guessing: "+access.accessPrivate(99));

object.prototype(person, coustomer);