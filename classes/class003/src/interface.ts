interface Car {
    name: string
    id: number
    color?: [string, string, string] // Não obrigatório
    isAvaliby: boolean
}

interface Engine extends Car { // Interface extendida
    year: number
    model: string | number // Tipo hibrido
    size?: number
}

const obj1: Car = {
    name: 'Ferrari Enzo',
    id: 31,
    isAvaliby: false
}
