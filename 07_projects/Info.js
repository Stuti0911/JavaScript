//SetInterval for digital clock
const clock= document.querySelector('#clock')

setInterval(function(){
  let date=new Date()
  let upTime= date.toLocaleTimeString()
  clock.innerHTML=upTime
},1000)