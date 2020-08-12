// --- set up canvas

let canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let c = canvas.getContext('2d');

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
    return output;
}

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

const radius = 30;
const circleArray = [];

for (let i = 0;i<100;i++) {
    circleArray.push(randomizeCircle(radius));
}

console.log(circleArray);

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);

    circleArray.forEach(circle => circle.update());

    
}

animate();