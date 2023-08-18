const coding=["c","cpp","java","swift","js"]
coding.forEach( function (item){
// console.log(item);
} )

//callback fn does not have name

coding.forEach((items)=>{
    // console.log(items);
})


function print(name){
    // console.log(name,"hello");
}

coding.forEach(print)

//for each loop contains item index and whole array
const ans=coding.forEach((item,index,arr)=>{
   console.log(item,index,arr);
})
console.log(ans);


// important : forEach loop does not return any value 

// for each loop with if-else condition is same as filter method on array


