# pixel-heart

## The problem: 
Generate a pixel drawing of a heart, without manually coding the pixels in the styles.css file

## Possible solutions:
1. ~~Create a script that draws the heart using a mathematical formula, and then exports to a CSS file with nth-childs already marked
  ~~* Try (x^2+y^2-1)^3=x^2y^3 at Desmos: https://www.desmos.com/calculator~~~
2. Convert heart image (.png) to text using an ascii art converter (https://www.text-image.com/convert/ascii.html)
  a. note: make sure text image width (100 char) matches canvas width (1000px) divided by size of each "pixel" box (10px).


## Stretch goals:
1. Make each box of the heart clickable to a separate page through a function that maps each CSS "pixel" to a record in the database.
2. Hover-over animation
3. Make the heart 3-D and movable, while individual boxes are still selectable
