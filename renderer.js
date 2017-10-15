const { remote } = require('electron')
const { mainWindow } = remote.require('./main.js')
const dialog = remote.dialog

const imageContainer = document.getElementById('imageContainer')
const imageSize = document.getElementById('imageSize')
const pixelPos = document.getElementById('pixelPos')

// function browseImage () {
//   dialog.showOpenDialog(mainWindow, {
//     filters: [{ name: 'Images', extensions: ['jpg', 'png', 'gif'] }],
//     properties: ['openFile']
//   }, function (filePaths) {
//     const file = filePaths[0]
//     const image = new Image()
//
//     // Remove previous image or images before adding the newly imported one
//     while (imageContainer.firstChild) {
//       imageContainer.removeChild(imageContainer.firstChild)
//     }
//
//     // We append the new image
//     image.src = file
//     imageContainer.append(image)
//   })
// }
function browseImage (filePaths) {
  const file = filePaths[0]
  const image = new Image()

  // Remove previous image or images before adding the newly imported one
  while (imageContainer.firstChild) {
    imageContainer.removeChild(imageContainer.firstChild)
  }

  // We append the new image
  image.src = file
  imageContainer.append(image)
}

function setImageSize () {
  console.log('client stuffies')
  console.log(imageContainer.clientWidth, imageContainer.clientHeight)
  console.log('normal stuffies')
  console.log(window.windowWidth, window.windowHeight)
  imageSize.textContent = 'width: ' + imageContainer.clientWidth + ' height: ' + imageContainer.clientHeight
}

window.addEventListener('resize', function(event) {
  setImageSize()
})

document.getElementById('browseImage').addEventListener('click', function (event) {
  const options = {
    filters: [{ name: 'Images', extensions: ['jpg', 'png', 'gif'] }],
    properties: ['openFile']
  }

  dialog.showOpenDialog(mainWindow, options, browseImage)
})

imageContainer.firstChild.onloaad = function () {
  console.log('test!!!')
}

imageContainer.onload = function () {
  console.log('test??')
}

imageContainer.addEventListener('click', function (event) {
  pixelPos.textContent = 'X: ' + event.clientX + ' Y: ' + event.clientY
})

// NOTE: All console.log for this file is displayed on the console window.

// FUTURE DEV
// Add functionality to set the width of an image
// Auto adjust main window according to size
// Adjust image to fit in the screen
