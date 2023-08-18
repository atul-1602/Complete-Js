// const promise=new Promise(function(resolve ,reject){
//     setTimeout(function(){
//         console.log("done");
      
//     },1000)
//     resolve() // use dto connect .then to Promise
// })
// promise.then(function(){
//     console.log("promise consumed one");
// })


// new Promise(function(resolve ,reject){
//     setTimeout(function(){
//         console.log("done");
//         resolve() // use dto connect .then to Promise
//     },1000)
   
// }).then(function(){
//     console.log("promise consumed two");
// })


// const promiseThree=new Promise(function(resolve,reject){
//     setTimeout(function(){
//       resolve({usename:"atul", email:"atuk@gmail.com"});
//     },1000)
// })

// promiseThree.then(function(user){
//     console.log(user);
// })

// const promiseFour=new Promise(function(resolve,reject){
//     setTimeout(function(){
//       resolve({usename:"atul", email:"atuk@gmail.com"});
//       reject("NOT COMPLETED")
//     },1000)
// }).then(function(user){
//     return user.usename;
// }).then(function(user1){
// console.log(user1);
// }).catch(function(error){
//     console.log(error);
// }).finally(function(){
//     console.log("finally executed");
// })


const promiseFive=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve("hello");
        reject("Promise 5 NOT COMPLETED")
     
    },1000)
});
// console.log(promiseFive);
async function Response(){
//   try {
//     const response=await promiseFive;   // try catch for error  
//     console.log(response);
//   } catch (error) {
//     console.log(error);
//   }
const response=await promiseFive;
console.log(response);
}
Response()

