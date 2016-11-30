const electron= require('electron')


const app= electron.app
const BrowserWindow= electron.BrowserWindow
const Menu= electron.Menu

let mainWindow
let menu
app.on('ready', _ => {
  console.log('Hey I\'m ready!')
  mainWindow= new BrowserWindow({
    height: 300,
    width:  400
  })

  // Changing the menu passing a new template
  const appName= electron.app.getName()
  const template= [
    {
      label: appName,
      submenu:[{
        label: `About ${appName}`,
        click: _ => {
          console.log('About clicked!')
        },
        role: 'about'
      }, {
        type: 'separator'
      }, {
        label: 'Quit',
        click: _ => {
          app.quit()
        },
        accelerator: 'Cmd+W'
      }]
    }

  ]
  menu= Menu.buildFromTemplate(template)
  Menu.setApplicationMenu(menu)

  mainWindow.on('close', _ =>{
    console.log('Ohh! You clicked close. So,... ,Bye Bye, cruel world.')
  })
})
