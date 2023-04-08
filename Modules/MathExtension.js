import Vector2 from "./Vector2.js";

export default class MathExtension {
    constructor() {}

    randomInteger(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    randomPointInTriangle(point0, point1, point2) {
        let random1 = Math.random();
        let random2 = Math.random();
        let sqrtRandom1 = Math.sqrt(random1);
        let x = (1 - sqrtRandom1) * point0.x + (sqrtRandom1 * (1 - random2)) * point1.x + (sqrtRandom1 * random2) * point2.x;
        let y = (1 - sqrtRandom1) * point0.y + (sqrtRandom1 * (1 - random2)) * point1.y + (sqrtRandom1 * random2) * point2.y;
        return new Vector2(x, y);
    }

    pointBetweenVectors(vec0, vec1, percentage) {
        let direction = vec1.difference(vec0);
        return new Vector2(vec0.x + (percentage * direction.x), vec0.y + (percentage * direction.y));
    }
}