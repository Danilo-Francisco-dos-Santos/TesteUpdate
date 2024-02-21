const { app, BrowserWindow } = require('electron')
const { autoUpdater } = require('electron-updater')

autoUpdater.checkForUpdatesAndNotify();

autoUpdater.on('update-available', () => {
    console.log('update available')
})

autoUpdater.on('update-not-available', () => {
    console.log('update not available')
})

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600
    })

    win.loadFile('index.html')
}

app.whenReady().then(() => {
    createWindow()
})