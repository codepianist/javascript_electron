const electron= require('electron')
const path= require('path')

const { app, Menu, Tray } = electron

app.on('ready', _ => {
  console.log('Ready!');
  const tray= new Tray(path.join('src','trayIcon.png'))
  tray.setContextMenu(Menu.buildFromTemplate([{
    label: '<Empty>',
    enabled: false
  }]))
})
