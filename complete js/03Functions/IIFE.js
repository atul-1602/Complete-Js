/*      IIFE(Immediately invoke function expression) is used for two reasons
        1-to make function run immediately
        2- to reduce the global variable pollution 
*/

// one to the right way to execute immediately
// function one(){
    // console.log("hello");
// }
// one()

// this is the syntax of IIFE (named iifi)
(function two(){  
    console.log("ghjkl");
})();   // semicolen is used for termib=nation of IIFE 



//we can also use arrow functions(unnamed iifi)
((name)=>{
    console.log(`hello ${name}`);
})("atul");
