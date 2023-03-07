function sum(a: number, b: number): number
function sum(a: string, b: string): string

function sum(a: any, b: any): any { // function overloading
	return a + b
}

const sayHello = (message: string): string => {
	return `The message is: ${message}`
}
