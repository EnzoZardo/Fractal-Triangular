import Canvas from "./Modules/Canvas.js";
import Vector2 from "./Modules/Vector2.js";
import MathExtension from "./Modules/MathExtension.js";

var mainVectors = [
    new Vector2(50, 250),
    new Vector2(150, 50),
    new Vector2(250, 250)
];
var mainColors = [
    'red',
    'green',
    'blue'
];
var randomVectors = [];
var ipt = document.getElementById('number-of-points');
var btn = document.getElementById('init-caos');
var canvas = new Canvas('canva');
var mathExtension = new MathExtension();

btn.onclick = () => { main() };

const drawMainTriangle = () => {
    for (let i = 0; i < mainVectors.length; i++) {
        canvas.drawPoint(mainVectors[i].x, mainVectors[i].y, 2, mainColors[i]);
    }
}

const drawNewRandomPoint = () => {
    let mainVectorsIndex = mathExtension.randomInteger(0, mainVectors.length - 1);
    let randomVectorsIndex = mathExtension.randomInteger(0, randomVectors.length - 1);
    let randomMain = mainVectors[mainVectorsIndex];
    let randomRandom = randomVectors[randomVectorsIndex];
    let middleVector = mathExtension.pointBetweenVectors(randomMain, randomRandom, 0.5);
    canvas.drawPoint(middleVector.x, middleVector.y, 1, mainColors[mainVectorsIndex]);
    randomVectors.push(middleVector);
}

const main = () => {
    canvas.clear();
    let numOfPoints = ipt.value;
    drawMainTriangle();
    let firstPoint = mathExtension.randomPointInTriangle(mainVectors[0], mainVectors[1], mainVectors[2]);
    canvas.drawPoint(firstPoint.x, firstPoint.y, 2, 'black');
    randomVectors.push(firstPoint);
    for (let i = 0; i < numOfPoints - 1; i++) {
        drawNewRandomPoint();
    }
}