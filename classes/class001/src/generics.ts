// Generics são 'variaveis de tipo"

const returnValue = <T>(value: T): T => value // O tipo agora pode ser passado como parâmetro

const message = returnValue<string>("Hello, word!")

const count = returnValue<number>(5)

function getFirstValueFromArray<J>(array: J[]) {
	// Os generics podem ser qualquer letra
	return array[0]
}

const firstValueFromStringArray = getFirstValueFromArray<string>(["1", "2"])
const firstValueFromNumbergArray = getFirstValueFromArray<number>([10, 20])

// Promisses
const returnPromisse = async (): Promise<number> => {
	return 5
}

// Classes
class GenericNumber<T> {
	zeroValue: T
	sum: (x: T, y: T) => T

	constructor(zeroValue: T, sum: (x: T, y: T) => T) {
		this.zeroValue = zeroValue
		this.sum = sum
	}
}

const myGenericNumber = new GenericNumber<number>(0, (x: number, y: number) => {
	return x + y
})
