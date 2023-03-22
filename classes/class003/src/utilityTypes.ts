// Objetos auxiliares
interface CatInfo {
	age: number
	breed: string
}
type CatName = "miffy" | "boris" | "mordred"
interface User1 {
	name: string
	age: number
	email: string
}
//----------------------------------------------------
// Usados para manipular Types, ou transformá-los

// Partial - transforma todas as props em opcinais
function createUSer(user1: Partial<User1>): User1 {
	return {
		name: "Danilo",
		age: 18,
		email: "danilovicentindasilva@gmail.com",
	}
}

// Pick - permite escolha de keys de um type
type userModify = Pick<User1, "name" | "email">

// Omit - constroí novo tipo ao 'remover' as keys e substituí-las
type userModify1 = Omit<User1, "age">

// Readonly - constroí novo type a partir de outro, mas define tudo para 'readonly'
type userModify2 = Readonly<User1>

// Record - constroí novo type onde, nos arguments, 1º são para keys, 2º para valores
const cats: Record<CatName, CatInfo> = {
	miffy: { age: 10, breed: "Persian" },
	boris: { age: 5, breed: "Maine Coon" },
	mordred: { age: 16, breed: "British Shorthair" },
}

// Exclude - constrói novo type excluindo tudo que pode ser unido
type T0 = Exclude<"a" | "b" | "c", "a">
type T1 = Exclude<"a" | "b" | "c", "a" | "b">
type T2 = Exclude<string | number | (() => void), Function>

// Extract - extrái tudo que pode ser unido
type T3 = Extract<"a" | "b" | "c", "a" | "f">

// NonNullable - constrói type que não incluí Null/Undefined
type T4 = NonNullable<string | number | undefined>
type T5 = NonNullable<string[] | null | undefined>

// Parameters - constrói um tuple type a partir dos params
type param = Parameters<() => string>

// ReturnType - retorna um type nornal pelos params
type returnT = ReturnType<() => string>

// Instance Type - instancia um type baseado no param
class C {
	x = 0
	y = 0
}
type instanc = InstanceType<typeof C>

// Awaited - cria uma promisse-type
type A = Awaited<Promise<string>>
