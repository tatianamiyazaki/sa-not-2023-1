let normal = false

function start(){
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
}

document.addEventListener('load', start)

document.write('VIRUS VIRUS VIRUS VIRUS')

//vírus do Fausto

// let normal = false

// function start() {
//   const audio = new Audio('https://media.geeksforgeeks.org/wp-content/uploads/20190531135120/beep.mp3')
//   setInterval(() => {
//     const body = document.body
//     if(normal) {
//       body.style.color = 'black'
//       body.style.backgroundColor = 'white'
//     }
//     else {
//       body.style.color = 'white'
//       body.style.backgroundColor = 'black'
//     }
//     normal = !normal
//     audio.play()
//   }, 1000)
// }

// window.addEventListener('load', start)