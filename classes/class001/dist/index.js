"use strict";
// Tipos básicos
let age = 5;
const firstName = "Felipe";
const isValid = true;
let idk = 5;
age = 1;
idk = "12";
idk = true;
const ids = [1, 2, 3, 4, 5];
const booleans = [true, false, true, false];
const names = ["felipe", "danilo"];
// Tupla
const person = [1, "danilo"];
// Lista de tuplas
const people = [
    [1, "jane"],
    [2, "doe"],
];
// Intersections
const productId = false;
// Enum
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
    Direction["Left"] = "Esquerda";
})(Direction || (Direction = {}));
const direction = Direction.Down;
// Type Assertions
const productName = 'Boné';
// let itemId = productName as string
let itemId = productName;
console.log(direction);
