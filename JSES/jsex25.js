function User(name, isAdmin ) {
    this.name = name;
    this.isAdmin = isAdmin;

}
 let user1 = new  User("shruti", true);
 let user2 = new User("john", false);

 console.log("User1 detail:- Name: " +user1.name+" isAdmin: "+user1.isAdmin);
 console.log("User2 detail:- Name: " +user2.name+" isAdmin: "+user2.isAdmin);


 function Shru(){
  
     console.log("Function shru is " +new.target);
 }

 let s = new Shru();

 let h = Shru();


 //if you dont use new operator, you can do that/check that with new.target

 
 