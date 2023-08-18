const tinderuser=new Object() //singelton object
tinderuser.id="123abc"
tinderuser.name="atul";
tinderuser.age=21;
// console.log(tinderuser);

const regularUser={
    email:"jfbvjfsnf",
    fullname:{
        fname:"hbskfjsf",
        lastname:"dbjgcjvhgjdshjd"

    }
}

// console.log(regularUser.fullname.fname);

const object1={1:"a", 2:"b"}
const object2={3:"a", 4:"b"}

// const object3={object1,object2}
// console.log(object3);

// const obj3=Object.assign(object1,object2) //object2 value into object 1
// const obj4=Object.assign({},object1,object2) // both object stored in a new array passed as first parameter
// console.log( object1);
// console.log( obj4);

const obj5={...object1,...object2} //spread operator
// console.log(obj5);

// console.log(Object.keys(tinderuser));  //return keys as an array can be iterate
// console.log(Object.values(tinderuser));  //return values as an array can be iterate

console.log(tinderuser.hasOwnProperty("sex")); 