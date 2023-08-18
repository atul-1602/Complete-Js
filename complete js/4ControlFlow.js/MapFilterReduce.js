const nums=[1,2,3,4,5,6,7,8,9,10]
const ans=nums.filter((num)=>num>4) // only condition check 
console.log(ans);

// const ans2=nums.map((num)=> {
//     if(num>=5) return num+10
//     else return num
// })
// console.log(ans2);


const ans2=nums.map((num)=>num>4) // if condition is true return true else false
console.log(ans2);

// filter is used to filter the array(return only filtered object ) if condition ke hisaab se return krta h
// map is used to manipulate the array which may or may not be based oncondition 
