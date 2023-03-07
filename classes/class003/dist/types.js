"use strict";
// Auxiliares
const aux = 'aux';
// Primitive Types
const typeString = "Danilo";
const typeNumber = 25;
const typeBoolean = true;
function types(params) {
    console.log("isso não é nada!");
}
const typeVoid = types();
const typeUndefined = undefined;
const typeNull = null;
const person1 = { name: "Danilo", age: 17 };
const person2 = { name: "Alex", age: 20, job: "dev" };
class Car {
    constructor(model, brand, year, isUsed) { }
}
const car1 = new Car("GT40", "Ford", 1990);
var Codes;
(function (Codes) {
    Codes[Codes["pan"] = 1] = "pan";
    Codes[Codes["van"] = 2] = "van";
})(Codes || (Codes = {}));
const typeArray = [1, 2, 3];
const typeTuples = ['Primeiro', 1];
const typeAny = 'Qualquer coisa';
// Any type declarations
const asDeclaration = ['Qualquer', 'coisa'];
const asType = aux;
const asAny = aux;
