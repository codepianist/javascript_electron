const electron= require('electron')
const counter= require('./Counter.js')

console.log('main running...')

const BrowserWindow= electron.BrowserWindow
const ipc= electron.ipcMain

const app= electron.app
let mainWindow

app.on('ready',_=>{
  console.log('App is ready!')
  mainWindow= new BrowserWindow({
    height: 300,
    width: 400
  })
  mainWindow.loadURL(`file://${__dirname}/index.html`);
  mainWindow.on('close',_=>{
    console.log('mainWindow closed!')
    mainWindow= null
  })
})

ipc.on('countdown_ev',_=>{
  console.log('<- countdown_ev received')
  counter(10, function(count){
    mainWindow.webContents.send('count_ev', count);
    console.log('counting '+count+'...')
  })
})
