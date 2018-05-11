function ReturnWithThis(){
    this.name = "Shruti";

    return {name:"black_widow"};
}

console.log(new ReturnWithThis().name);

function AnotherEx(){
    this.class = "XII";

    return;
}

let AE = new AnotherEx()
console.log(AE.class);

function OneMoreEx(grade,marks){
    this.grade = grade;

    this.marks = marks;

    return{ grade:8.5 , marks:85};
}

let OME = new OneMoreEx(9.5 , 95);

console.log(OME.grade +" "+OME.marks);