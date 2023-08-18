// used in shopping cart 

const num=[1,2,3,4]


// const total=num.reduce(function (acc,currval){ 
//     console.log(`acc:${acc}  currval:${currval}`);
//     return acc+currval 
// },10)
// console.log(total);

const total=num.reduce((acc,currval)=>acc+currval,0)
console.log(total);