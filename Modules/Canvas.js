export default class Canvas {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        this.context = this.canvas.getContext('2d');
    }

    get width() {
        return this.canvas.width;
    }

    get height() {
        return this.canvas.height;
    }

    set width(width) {
        this.canvas.width = width;
    }

    set height(height) {
        this.canvas.height = height;
    }

    drawLine(x0, y0, x1, y1, lineWidth, color) {
        this.context.moveTo(x0, y0);
        this.context.lineTo(x1, y1);
        this.context.strokeStyle = color;
        this.context.lineWidth = lineWidth;
        this.context.stroke();
    }

    drawPoint(x, y, radius, color) {
        this.context.strokeStyle = color;
        this.context.beginPath();
        this.context.arc(x, y, radius, 0, 2 * Math.PI, true);
        this.context.stroke();
    }

    clear() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    toString() {
        return `Canvas { width: ${this.canvas.width}, height: ${this.canvas.height}}`;
    }
}