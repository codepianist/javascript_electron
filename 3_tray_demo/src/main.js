const electron= require('electron')
const path= require('path')

// const app= electron.app
// const Tray= electron.Tray
const { app, Tray, Menu } = electron

app.on('ready', _ => {
  console.log('Ready!')

  const tray= new Tray(path.join('src','trayIcon.png'))
  const contextMenu= Menu.buildFromTemplate([
    {
      label: '1,2,3,..',
      click: _ => console.log('1,2,3,..')
    },
    {
      label: 'A,B,C,...',
      click: _ => console.log('A,B,C,..')
    }
  ])
  tray.setContextMenu(contextMenu)
  tray.setToolTip('Hey! You\'re a Star!')

})
