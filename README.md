
<h1 align="center">
🎨🔄📱👀 Color Interpolation Using Device Orientation 📱👀🔄🎨
</h1>
<p align="center">
This repository contains a JavaScript program that interpolates between two colors (red and blue) based on device orientation, using the Device Orientation API.</p>
  </br>

## Functionality 🚀

The program calculates a value between 0 and 1 based on the orientation of the device. This value is used to interpolate the color values of each channel (red, green, and blue) and create a new background color for the webpage. This is achieved by using the `parseInt()` function to convert the color values from their hexadecimal representation to decimal, and then interpolating the values based on the device orientation value. After calculating the color values, the program combines them to create a hex code for the new color. This is achieved by shifting the red channel value 16 bits to the left, the green channel value 8 bits to the left, and adding the blue channel value. The resulting value is then converted back to hexadecimal using the `toString()` method, and concatenated with a "#" symbol to create the final hex code for the color.

## Usage 💻

To use this program, simply include the JavaScript file in your HTML document and load it on a device that supports the Device Orientation API. The program will automatically listen for changes in the device orientation and interpolate the background color accordingly.

````
<script src="interpolateColors.js"></script>
````

## Author

This program was created as a part of an exam project at Hochschule Bremerhaven by Jacob Benjamin Menge.

## Resources

The code in this repository was created using various resources, including the following two Stack Overflow threads:

+ [Color Interpolation:](https://stackoverflow.com/questions/1855884/determine-color-based-on-percentage-in-javascript) This thread provided information on how to interpolate between two colors based on a percentage value, which was adapted for use in the program.

+ [Interpolate two hex-colors:](https://stackoverflow.com/questions/12556415/interpolate-between-two-hex-colors) This thread provided information on how to interpolate between two hexadecimal color values, which was also adapted for use in the program.

These resources were used to enhance the functionality of the program and ensure best practices in its development.

## License

This program is licensed under the MIT License.
