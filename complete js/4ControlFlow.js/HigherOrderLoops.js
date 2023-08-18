//for of loop

// const arr=[1,2,3,4,5]
// for (const element of arr) {
//     console.log(element);
// }

const greeting="jkhkjfdfsf"
for (const greet of greeting) {
    // console.log(greet);
}

//maps are iteratable while objects are not using for of loops

//for in loop is used over objects

const obj={
    "one":1,
    "two":2,
     "three":3
}
// console.log(obj["one"]);

for (const key in obj){
    console.log(key); //keys
    console.log(obj[key]);  // values
}


/* IMPORTANT */
//for of loops works on values or elements 
//while for in loop works on keys italways print keys of objects and arrays (indexes )