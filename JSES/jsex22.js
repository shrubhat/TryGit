let user = {
    name:"Einstein",
    age:"92",
    sayhi: function(){
        console.log("hello");
    }
};

user.sayhi();

let sayname = function(){
    console.log("my name is Einstein");
}
user.sayname = sayname;

user.sayname();

let gender = "Male";

user.gender = gender;

let saygender = function(){
    console.log("Gender is " + user.gender);
}
user.saygender = saygender;
user.saygender();

console.log(user);

