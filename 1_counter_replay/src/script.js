const electron= require('electron')
const ipc= electron.ipcRenderer

document.getElementById('countdown_btn').addEventListener('click',_=>{
  console.log('You clicked the button')
  console.log('-> Sending countdown_ev...')
  ipc.send('countdown_ev')
})

const show_div= document.getElementById('counter')
ipc.on('count_ev', (ev, count) =>{
  show_div.innerHTML = count
})
