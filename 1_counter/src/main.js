const electron= require('electron')
const countdown= require('./countdown.js')

const app= electron.app
const BrowserWindow= electron.BrowserWindow
const ipc= electron.ipcMain

let mainWindow

app.on('ready', _ =>{
  console.log('and now I\'m ready!');
  mainWindow= new BrowserWindow({
    height: 400,
    width: 400
  })

  mainWindow.loadURL(`file://${__dirname}/countdown.html`)


  mainWindow.on('closed', _ => {
    console.log('Ohhh, You close my window! Bye.');
    mainWindow= null
  })
})

console.log('mainWindow= '+mainWindow)

ipc.on('countdown_ev', _ =>{
  console.log('countdown_ev captured!')
  countdown(count =>{
    console.log('sending cont_ev('+count+')...')
    mainWindow.webContents.send('count_ev', count)
  })
})

console.log('Hey, I\'m a live...');
