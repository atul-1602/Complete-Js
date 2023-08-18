// array in js is resizeable
// /array always make shallow copies when we tries to copy
//means reference type

const arr=[1,2,3,4,5,6,true,"atul"]
const myArr=new Array(1,2,3,4)

//arrays methods


// arr.push(100)
// console.log(arr);

// arr.pop()
// console.log(arr);

// arr.unshift(80)
// console.log(arr);

// arr.shift()
// console.log(arr);


// console.log(arr.includes(5));
// console.log(arr.indexOf('atul'));

const newArr=arr.join()
// console.log(arr);
// console.log(typeof newArr);


/*  slice and splice 
slice return the pat of array and does not change the original array
while splice changes the original array by removing elements


*/

const array=[1,2,3,4,5,6]

// const newA=array.slice(1,3)
// console.log(newA);
// console.log(array);

// const newA=array.splice(1,3)
// console.log(newA);
// console.log(array);