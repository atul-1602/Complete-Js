//mini hoisting 

console.log(add(5))

function add(num){
    return num+1
}


const ans= function (num){ 
    return num+1
}

// console.log(ans(7));
ans(7);