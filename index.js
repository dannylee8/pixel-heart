import { heart } from './heart.js'

// The function gets called when the window is fully loaded
let temp = "";

function mapHeart() {
  // Loop over all of the pixels
  // console.log(heart.length)
  for (var h = 0; h < heart.length; h++) {
    for (var i = 0; i< heart[h].length; i++) {
      if (heart[h][i] == "M") {
        temp += "<div class='pixel'></div>"
      } else {
        temp += "<div class='pixel-red'></div>"
      }
      
    }
    temp += "<br/>"
  }
  document.getElementById("text").innerHTML = temp;
}

mapHeart();
  // Main loop
  // function main(tframe) {
  //     // Request animation frames
  //     // window.requestAnimationFrame(main);

  //     // Create the image
  //     createImage(tframe);

  //     // Draw the image data to the canvas
  //     context.putImageData(imagedata, 0, 0);
  // }

  // Call the main loop
  // main(0);
