let emp = {
    name:"joseph",
    age:"29",
    display:function(){
        return (this.name + " "+this.age);
    },
    
};

let admin = {
    dept:"Account",
    dus:function(){
            return this.dept;
    },
};

let hr = emp + admin;

console.log(hr);
console.log(hr.name+"  "+hr.age+"  "+hr.dept+"  ");
console.log(hr.display());
console.log(hr.dus());
