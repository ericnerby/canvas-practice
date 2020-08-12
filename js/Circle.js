class Circle {
    /**
     * constructs an object in the Circle class
     * @param {number} x  - horizontal position
     * @param {number} y  - vertical position
     * @param {number} dx - horizontal velocity
     * @param {number} dy - vertical velocity
     * @param {number} radius - radius of circle
     * @param {number} r  - red color value
     * @param {number} g  - green color value
     * @param {number} b  - blue color value
     */
    constructor(x,y, dx, dy, radius, r,g,b) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;
        this.color = `rgb(${r},${g},${b})`;
    }

    /**
     * draws the circle on the canvas
     */
    draw = () => {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.fillStyle = this.color;
        c.fill();
    }

    /**
     * updates the location of the circle on the canvas
     *   if the circle reaches the end of the canvas, it changes directions
     */
    move = () => {
        this.draw();
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
            this.dx = -this.dx;
        }
        if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
            this.dy = -this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;

    }
}