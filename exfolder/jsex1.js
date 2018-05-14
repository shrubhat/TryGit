let animal = {
    walk() {
      if (!this.isSleeping) {
        alert(`I walk`);
      }
    },
    sleep() {
      this.isSleeping = true;
    }
  };
  
  let rabbit = {
    name: "White Rabbit",
    __proto__: animal
  };
  
  // modifies rabbit.isSleeping
  rabbit.sleep();
  //animal.sleep();
  console.log(rabbit.isSleeping); // true
 console.log(animal.isSleeping);

 console.log(1-
2-
3);

console.log("There will be an error");//try without

[1, 2].forEach(console.log);//semicolon.
