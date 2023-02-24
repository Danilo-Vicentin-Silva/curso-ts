interface IPerson {
	id: number
	sayMyName(): string
}

class Person implements IPerson {
	readonly id: number // Impossível de modificar
	protected name: string // Apenas classe e subclasse acessa
	private age: number // Apenas classe acessa

	constructor(id: number, name: string, age: number) {
		this.id = id
		this.name = name
		this.age = age
	}

	sayMyName(): string {
		return this.name
	}
}

// Mesma coisa que acima (refatorado) ^
class PersonRefact {
	constructor(
		readonly id: number,
		protected name: string,
		private age: number
	) {}
}

class Employee extends Person {
	constructor(id: number, name: string, age: number) {
		super(id, name, age)
	}

	whoAmI() {
		this.name
	}
}

const person = new Person(1, "danilo", 18)
person.name
