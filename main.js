var electron = require('electron')
var path = require('path')
var url = require('url')

const app = electron.app
const BrowserWindow = electron.BrowserWindow

let mainWindow

function startApp () {
  mainWindow = new BrowserWindow({ width: 800, height: 600 })

  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'src/index.html'),
    protocol: 'file',
    slashes: true
  }))

  mainWindow.on('closed', function () {
    mainWindow = null
  })
}

function quitApp () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
}

function activateApp () {
  if (mainWindow === null) {
    startApp()
  }
}

exports.mainWindow = mainWindow

app.on('ready', startApp)
app.on('window-all-closed', quitApp)
app.on('activate', activateApp)

// NOTE: All console.log for this file is displayed on the terminal.
