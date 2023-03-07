// Auxiliares
const aux = 'aux'

// Primitive Types
const typeString: string = "Danilo"
const typeNumber: number = 25
const typeBoolean: boolean = true
function types(params: void) {
	console.log("isso não é nada!")
}
const typeVoid: void = types()
const typeUndefined: undefined = undefined
const typeNull: null = null

// New Types (TS)
interface Person {
	name: string
	age: number
	job?: string
}

const person1: Person = { name: "Danilo", age: 17 }
const person2: Person = { name: "Alex", age: 20, job: "dev" }

class Car {
	constructor(model: string, brand: string, year: number, isUsed?: boolean) {}
}

const car1 = new Car("GT40", "Ford", 1990)

enum Codes {
	pan = 1,
	van = 2
}

const typeArray: number[] = [1, 2, 3]
const typeTuples: [string, number] = ['Primeiro', 1]
const typeAny: any = 'Qualquer coisa'

// Any type declarations
const asDeclaration = ['Qualquer', 'coisa'] as const
const asType = aux as string
const asAny = aux as any
