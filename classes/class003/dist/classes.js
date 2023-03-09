"use strict";
// Implementação básica
class Country {
    constructor(
    // Modificadores de acesso
    name, // Acessado por todos (só leitura)
    bombs, // Apenas classe
    population // Subclasses podem ver
    ) {
        this.name = name;
        this.bombs = bombs;
        this.population = population;
    }
}
const brazil = new Country("Brazil", 10000, 100);
// Classes abstratas
class Animal {
    constructor(name) { }
    makeSound() {
        console.log("moving...");
    }
}
class Dog extends Animal {
    makeSound() {
        console.log("Au Au");
    }
}
// Herança e Poliformismo
class Car1 {
    constructor(name, model, year) { }
    turnOn() {
        console.log("is on!");
    }
}
class Ferrari extends Car1 {
    constructor(name, model, year, color) {
        super(name, model, year);
    }
    turnOn() {
        console.log("Very heigth sound!!");
    }
}
const ferrari44Pista = new Ferrari("44Pista", "sport", 2011, "red");
