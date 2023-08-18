//singleton

//object declare by constructor method where singleton is formed 
 // object.create

//object literals

const mysym=Symbol("key1")

const jsUser={
    name:"atul",  //name is lawys a string  keys are string more precise
    age:20,
    [mysym]:"MYKEY",   // not stored as string but as a symbol
    location:"noida",
    email:"atul@gmail.com",
    "last name":"Chauhan"
}

// console.log(jsUser.name);
// console.log(jsUser["name"]);

// console.log(jsUser.last name);
console.log(jsUser["last name"]);

// console.log(typeof jsUser[mysym]);  // way to print symbol in object

jsUser.email="fyghjkl"    //change objects

// Object.freeze(jsUser)
jsUser.email="fyghjkl"    //does not change objects after freeze it also does not give error
// console.log(jsUser);

jsUser.greeting=function(){
    console.log("hello jsuser");
}
// console.log(jsUser.greeting);


