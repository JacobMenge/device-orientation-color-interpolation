/*
 * this program interpolates between two colors based on the direction of the device
 * using the Device Orientation API. it is a Part of an exam project created for the Programming 3 module
 * at Hochschule Bremerhaven.
 *
 * version date: 31.01.2023
 * author: Jacob Benjamin Menge
 */

// define color A and B as constants
const colorA = "#ff0000"; // red
const colorB = "#0000ff"; // blue

// load the Device Orientation API
if (window.DeviceOrientationEvent) {
  window.addEventListener("deviceorientation", setBackgroundColor);
}

// set background color
function setBackgroundColor(e) {
  // calculate device direction
  const direction = e.alpha;

  // calculate a value between 0 and 1 based on the direction
  const value = (direction + 180) / 360;

  // calculate color values for each channel
  const r = Math.round(parseInt(colorA.substring(1, 3), 16) * (1 - value) + parseInt(colorB.substring(1, 3), 16) * value);
  const g = Math.round(parseInt(colorA.substring(3, 5), 16) * (1 - value) + parseInt(colorB.substring(3, 5), 16) * value);
  const b = Math.round(parseInt(colorA.substring(5, 7), 16) * (1 - value) + parseInt(colorB.substring(5, 7), 16) * value);

  // create hex code for color << 8 bits * 3 = 24-bit color value
  const color = "#" + ((r << 16) + (g << 8) + b).toString(16);

  // set background color
  document.body.style.backgroundColor = color;
  
  // remove the event listener if it is no longer needed
  if (!window.DeviceOrientationEvent) {
    window.removeEventListener("deviceorientation", setBackgroundColor);
  }
}
