// --- set up canvas

let canvas = document.querySelector('canvas');

// --- resize canvas to window size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// --- setup context for drawing
let c = canvas.getContext('2d');

// --- set variables
let circleArray = [];
const circleDensity = 1000; // larger number means less density
const colorArray = [
    [21, 176, 151],
    [92, 93, 141],
    [219, 217, 219],
    [196, 69, 54],
    [216, 204, 52],
]

const mouse = {
    x: undefined,
    y: undefined
};

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
 * @returns {object} a new object from the Circle class
 */
function randomizeCircle() {
    const radius = randomNumber(1,5);
    const x = randomNumber((2*radius), innerWidth - (2*radius));
    const y = randomNumber((2*radius), innerHeight - (2*radius));
    const dx = randomNumber(-1, 1);
    const dy = randomNumber(-1, 1);
    
    const colorNumber = randomNumber(0,colorArray.length -1,true,true);
    console.log(colorNumber);
    const colorValues = colorArray[colorNumber];
    const [red,green,blue] = colorValues;
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
function init() {
    const windowArea =  window.innerWidth * window.innerHeight;
    const numberOfCircles = windowArea / circleDensity;
    circleArray = [];

    for (let i = 0;i<numberOfCircles;i++) {
        circleArray.push(randomizeCircle());
    }
}

init();

//start the animation loop
animate();

/* ----- Event Listeners ----- */
window.addEventListener('mousemove', event => {
    mouse.x = event.x;
    mouse.y = event.y;
});

window.addEventListener('resize', () => {
    // --- resize canvas to window size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    init();
});