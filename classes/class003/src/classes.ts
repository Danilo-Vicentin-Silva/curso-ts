// Implementação básica
class Country {
	constructor(
		// Modificadores de acesso
		readonly name: string, // Acessado por todos (só leitura)
		private bombs: number, // Apenas classe
		protected population: number // Subclasses podem ver
	) {}
}

const brazil = new Country("Brazil", 10000, 100)

// Classes abstratas
abstract class Animal {
	constructor(name: string) {}
	makeSound(): void {
		console.log("moving...")
	}
}

class Dog extends Animal {
	makeSound(): void {
		console.log("Au Au")
	}
}

// Herança e Poliformismo
class Car1 {
	constructor(name: string, model: string, year: number) {}
	turnOn() {
		console.log("is on!")
	}
}

class Ferrari extends Car1 {
	constructor(name: string, model: string, year: number, color: string) { //Herança e poliformismo
		super(name, model, year)
	}
	turnOn(): void { // Substituição de método (overrive)
		console.log("Very heigth sound!!")
	}
}

const ferrari44Pista = new Ferrari("44Pista", "sport", 2011, "red")


