const { remote } = require('electron')
const { mainWindow } = remote.require('./main.js')
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

    // Set the image size text

    // Auto adjust main window according to size
    // Adjust image to fit in the screen
    console.log(imageContainer)
  })
}

document.getElementById('browseImage').addEventListener('click', function () {
  browseImage()
})

document.getElementById('imageContainer').addEventListener('click', function(event) {
  const pixelPos = document.getElementById('pixelPos')
  pixelPos.textContent = 'X: ' + event.x + ' Y: ' + event.y
})

// NOTE: All console.log for this file is displayed on the console window.
