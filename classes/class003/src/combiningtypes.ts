const a = 'palavra'
const b = 123
interface User {
    name: string
    lastName: string
    id: number
    isOn: boolean
}

const id: string | number = 1 // Unium
type ab = string & number // Intersection
type newType = string // Aliases
type UserKey = keyof User // Keyof Operator