let user ={
    name: "John",
    age:25,
    JType:"Admin"
}

let Ad=user;

Ad.dept = "HR";

console.log("dept" in user);
console.log("dept" in Ad);
let manager = {};
for(Key_Value in user){
    manager[Key_Value] = user[Key_Value];
}
console.log(manager.name);
console.log(manager.age);
console.log(manager.JType);
console.log(manager.dept);

manager.gender = "Female";

console.log("gender" in user);
console.log("gender" in manager);

user = null;
 console.log("name" in Ad);
 console.log("age" in Ad);
 console.log("JType" in Ad);
 console.log("dept" in Ad);

 console.log("name" in user);
 console.log("age" in user);
 console.log("JType" in user);
 console.log("dept" in user);

