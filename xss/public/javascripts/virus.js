let normal = false
setInterval(() => {
  const body = document.body
  if(normal){
    body.style.color = 'black'
    body.style.backgroundColor = 'white'
  }
  else{
    body.style.color = 'white'
    body.style.backgroundColor = 'black'
  }
 normal = !normal
}, 1000)