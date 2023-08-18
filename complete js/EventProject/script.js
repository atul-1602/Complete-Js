function colorMaking(){
    const hex="0123456789ABCDEF";
   let finalcolor="#"
    for(let i=0;i<6;i++){
       finalcolor+=hex[Math.floor(Math.random()*16)];
    }
    return finalcolor;
}
const ans=colorMaking()

let stop;
document.getElementById('start').addEventListener('click',function(){
  stop=  setInterval(colorChange,1000);
    
})

function colorChange(){
   const ans= colorMaking()
   document.body.style.backgroundColor=ans
}


document.getElementById('stop').addEventListener('click',function(){
   clearTimeout(stop);
   stop=null
    
})