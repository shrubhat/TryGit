let car = {
    type: "SUV",
    color: "black",

    drive: function(){
        console.log(this.type+" "+this.color +" colored car is on road "+"")//with 'this'
    },
    driver_Name: "Shruti",
    car_NO: 6455,
    driver_info: function(){
        console.log("Car Number "+car.car_NO +" is driven by "+car.driver_Name);// with object name ="car"
    }
};

//car.drive();
//car.driver_info();

let audi_car = car;



//audi_car.driver_info();// using 'car' instead of this, works. but put null in car and check 
//audi_car.drive();

car = null;

audi_car.drive()//with 'this'
//audi_car.driver_info();//with 'car' error:jsex23.js:6
//TypeError: Cannot read property 'car_NO' of null


