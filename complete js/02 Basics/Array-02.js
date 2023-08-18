const one=[5,2,3,6,8,4,5,7]
const two=["one","two ","three"]

// one.push(two)
// console.log(one);

// const final=one.concat(two)
// console.log(one);


//spread operator ->it breaks array into single element and oush individually 
// const final=[...one,...two]
// console.log(final);


//flat 
const array=[1,2,3,[4,5,6],[4,45,87,[7,66,44,33]]]
// console.log(array.flat(Infinity));
// console.log(Array.isArray("atul"));  // check weather given is array or not
console.log(Array.from("atul"));  // create array from instant giving value 
// console.log(Array.from({name:"Atul"})); // return empty array if it does not convert array from giving

//make array from set of variables

const first=1;
const second=2;
const third=3;
console.log(Array.of(first,second,third,Array.of(Array.from(one))));