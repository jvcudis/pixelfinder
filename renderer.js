const {remote} = require('electron')
const {mainWindow} = remote.require('./main.js')
const dialog = remote.dialog

function browseImage () {
  dialog.showOpenDialog(mainWindow, {
    filters: [{ name: 'Images', extensions: ['jpg', 'png', 'gif'] }],
    properties: ['openFile']
  }, function (filePaths) {
    const file = filePaths[0]

    // Create image
    const image = new Image()
    image.src = file

    // Append image
    const imageContainer = document.getElementById('imageContainer')
    imageContainer.append(image)

    // Auto adjust main window according to size
    console.log(imageContainer.naturalHeight)
    console.log(imageContainer.naturalWidth)
  })
}

document.getElementById('browseImage').addEventListener('click', function () {
  browseImage()
})

// NOTE: All console.log for this file is displayed on the console window.
