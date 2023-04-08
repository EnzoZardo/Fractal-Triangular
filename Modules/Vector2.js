export default class Vector2 {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    get getX() {
        return this.x;
    }

    get getY() {
        return this.y;
    }

    toString() {
        return `Vector2 { x: ${this.x}, y: ${this.y}}`;
    }

    equals(that) {
        return (this.x == that.x && this.y == that.y);
    }

    difference(that) {
        return new Vector2(this.x - that.x, this.y - that.y);
    }

    normalize() {
        return ath.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
    }
}