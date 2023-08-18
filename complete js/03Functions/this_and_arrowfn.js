const user={
    name:"Atul",
    age:21,
    welcome: function (){
        console.log(`${this.name} , welcome to web`);
        // console.log(this);  // here this represent current object and print user
    }
}
// console.log(user.welcome);
// user.welcome()
user.name="cvbn"
// user.welcome()


// console.log(this);  // here this refer to global object which is empty but when we run this in chrome it gives window object 
                      // global object in chrome is window

    /* +++++++ we will not use this keyword inside function not preferred++++++*/


    // function add(){
    //     console.log(this);   //wide thinga print includes global context
    // }
    // add()


    /*++++++++++++ARROW FUNCTION+++++++++++++++*/

    const ans=()=>{
        // console.log(this);   // this inside arrow fn return blank global object 
    }

    ans()


//ways to define arrow function

//1

//  const one=(num1,num2)=>{
//     return num1+num2
//  }
//  console.log(one(7,8));

//2 
// const two=(num1,num2)=> num1+num2     // when we have one line of code it automatically return num1+num2
// console.log(two(7,9));


//3
const three=(num1,num2)=> ( num1+num2)     // using braces we don not need to use return keyword
console.log(three(7,9));