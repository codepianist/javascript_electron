const electron= require('electron')
const ipc= electron.ipcRenderer

console.log('rendered.js loaded!')
document.getElementById('countdown_btn').addEventListener('click', _=>{
  console.log('button clicked!')
  ipc.send('countdown_ev')
})

ipc.on('count_ev', (ev, count)=>{
  console.log('count_ev captured, count= '+count)
  document.getElementById('counter').innerHTML= count
})
