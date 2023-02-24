// Type
type Order = {
	productId: string
	price: number
}

type User = {
	firstName: string
	age: number
	email: string
	password?: string
	orders: Order[]
	register(): string
}

const user: User = {
	firstName: "Danilo",
	age: 18,
	email: "danilovicentindasilva@gmail.com",
	password: "12345",
	orders: [{ productId: "1", price: 200 }],
	register() {
		return "registrado!"
	},
}

user.password

const printLog = (message: string) => {}

printLog(user.password!)

// Unions
type Author = {
	books: string[]
}

const author: Author & User = {
	age: 2,
	books: ["os pilares"],
	firstName: "Danilo",
	orders: [],
	email: "teste",
	register() {
		return "Registrado!"
	},
}

// Interfaces
interface UserInterface {
	readonly firstName: string
	email: string
	login(): string
}

const emailUser: UserInterface = {
	email: "Dandjsakbdn",
	firstName: "Alex",
	login() {
		return "logado!"
	},
}

interface AuthorInterface {
	books: string[]
}

const newAuthor: UserInterface & AuthorInterface = {
	email: "author@",
	firstName: "author",
	books: [],
	login() {
		return "logado!"
	},
}

type Grade = number | string
const grade: Grade = 1
