// --- set up canvas

let canvas = document.querySelector('canvas');

// --- resize canvas to window size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// --- setup context for drawing
let c = canvas.getContext('2d');

// --- set variables
const radius = 30;
const circleArray = [];
const numberOfCircles = 100;

/* ----- Helper Functions ----- */

/**
 * generates a random number between two given values
 * @param {integer} lower     - the lower limit
 * @param {integer} upper     - the upper limit
 * @param {boolean} allowZero - whether 0 is an acceptable value
 * @param {boolean} wholeNums - whether the return value should be whole
 */
function randomNumber(lower,upper,allowZero = false, wholeNums = false) {
    let output = Math.random() * (upper - lower + 1) + lower;
    if (!allowZero) {
        if (output !== 0) {
            return output
        } else {
            return randomNumber(lower,upper,allowZero);
        }
    }
    if (wholeNums) {
        return Math.floor(output);
    }
    return output;
}

/**
 * Passes random parameters to the Circle constructor method and returns a new Circle object
 * @param   {number} radius 
 * @returns {object} a new object from the Circle class
 */
function randomizeCircle(radius) {
    let x = randomNumber((2*radius), innerWidth - (2*radius));
    let y = randomNumber((2*radius), innerHeight - (2*radius));
    let dx = randomNumber(-1, 1);
    let dy = randomNumber(-1, 1);
    let red = Math.floor(randomNumber(0,255, true));
    let green = Math.floor(randomNumber(0,255, true));
    let blue = Math.floor(randomNumber(0,255, true));
    return new Circle(x,y,dx,dy,radius,red,green,blue);
}

/**
 * sets up animation loop for circles
 */
function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);

    circleArray.forEach(circle => circle.move());
}

/* ----- Starting the Animation ----- */ 

//populate the circle array
for (let i = 0;i<numberOfCircles;i++) {
    circleArray.push(randomizeCircle(radius));
}

//start the animation loop
animate();