"use strict";
// Generics são 'variaveis de tipo"
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const returnValue = (value) => value; // O tipo agora pode ser passado como parâmetro
const message = returnValue("Hello, word!");
const count = returnValue(5);
function getFirstValueFromArray(array) {
    // Os generics podem ser qualquer letra
    return array[0];
}
const firstValueFromStringArray = getFirstValueFromArray(["1", "2"]);
const firstValueFromNumbergArray = getFirstValueFromArray([10, 20]);
// Promisses
const returnPromisse = () => __awaiter(void 0, void 0, void 0, function* () {
    return 5;
});
// Classes
class GenericNumber {
    constructor(zeroValue, sum) {
        this.zeroValue = zeroValue;
        this.sum = sum;
    }
}
const myGenericNumber = new GenericNumber(0, (x, y) => {
    return x + y;
});
