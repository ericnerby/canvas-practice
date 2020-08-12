# Interactive Canvas Background

## Where This Idea Came From

I wanted to understand the html `<canvas>` element better, so I built my own project based on Chris Course's Youtube series [HTML5 Canvas Tutorial for Beginners](https://youtu.be/EO6OkltgudE).

I took Chris' tutorial further by utilizing ES6 features that didn't exist at the time of the tutorial. These include:
* Arrow functions
* Class definitions
* Deconstruction

Overall, I tried to make my version more modular (and more DRY) and object-oriented while also utilizing more modern JS features.

## The End Result

This repo contains a basic implementation of some interactive features in the `<canvas>` html element.

* The canvas resizes automatically with the browser window resize event
* The canvas is populated with procedurally generated circles of random size, velocity, position, and color within a color scheme
* The circles near the mouse cursor react by growing in size and then shrink back down when further away from the cursor
* The circle density is consistent no matter the window size because of a fixed ratio to the window area rather than a fixed number of circles