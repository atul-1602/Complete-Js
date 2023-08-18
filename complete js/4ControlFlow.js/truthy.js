/* false values 
   false  ,0 ,-0,BigInt 0n, null ,undefined , Nan, ""

   */
/* truthy values 
 [],"0", "false", " ",{}, function(){}

   */

 // how to check if object is empty or not 

 const obj={}
 if(Object.keys(obj).length===0){   // Object.keys() return the array of keys
    // console.log("empty");
 }

 //Nullish Coalescing Operator (??): null undefined
 let val1
 val1=5 ??10  // take first value if is null/undefined then choose second
 console.log(val1);

 val1=null ??10
 console.log(val1);

 val1=undefined ??10
 console.log(val1);

 val1=undefined ??10 ??50   //take first not null or undefined
 console.log(val1);