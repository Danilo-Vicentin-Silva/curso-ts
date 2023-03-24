// Permitem códigos mais complexos e moderados, menos erros e mais robustos

// Mapped Types - mapeiam uma regra de um novo tipo baseado nas props passadas.
type Readonly1<T> = {
	readonly [P in keyof T]: T[P]
}
let obj = { x: 10, y: 20 }
let readonly: Readonly1<typeof obj> = obj

// Conditional types - seleciona tipo como base em uma condição, baseado nos valores de entrada
type Extends<T, U> = T extends U ? T : U
type A1 = Extends<string, any> // string
type B1 = Extends<any, string> // string

// Literal types - especifia um valor ao tipo
type Age = 42
let age: Age = 42 // OK
//let age1: Age = 12  //Error

// Template literal types - cria um modelo/type com concatenação de valores
type Name = `Mr. ` + string
let name1: Name = `Mr. Smith` //OK
//let name2 : Name = `Mts. Smith` //Error

// Recursive types - permite criar recursividade na criação de tipos
type LinkedList<T> = T & { next: LinkedList<T> }
let LinkedList: LinkedList<number> = { value: 1, next{ ...}}

