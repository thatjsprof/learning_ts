// type: string
let string: string = 'holla'
// type: number
let number: number = 21
// type: any
let variable: any = '1'
// type: array
let array: any[] = ['holla', 'thanks']
// type: tuple
let tuple: [number, string] = [34, 'holla']
// type: enum
enum Color {
    Gray,
    Green = 100,
    Blue
}
// type: any
let car: any = 'dkldls'
car = 213

// functions and types
function returnName(): string {
    return 'David'
}

function sayHello(): void {
    console.log('hello')
}

function multi(value1: number, value2: number): number {
    return value1 * value2
}

// functions as types
let myFunction: (val1: number, val2: number) => number 
myFunction = multi

// Objects as types
let object: {name: string, age: number} = {
    name: 'holla',
    age: 12
}

// type alias
type Complex = {data: number[], output: (all: boolean) => number[]}

let complexObject: Complex = {
    data: [12, 12, 3],
    output: function(all: boolean): number[] {
        return this.data
    }
}

// union types
let age: number | string | boolean= 21
age = true
'kkdcd'

// check types
let variable1: number = 21
if (typeof variable1 == "number") {
    console.log('variable is a number')
}

// nullable type
let value: number | null = 1

function never(): never {
    throw new Error('not available')
}

type bankAccountType = { money: number, deposit: (value: number) => void }

let bankAccount: bankAccountType = {
    money: 2000,
    deposit(value: number): void {
        this.money = value
    }
}

let myself: { name: string, bankAccount: bankAccountType, hobbies: string[] } = {
    name: 'max',
    bankAccount: bankAccount,
    hobbies: ["sports", "cooking"]
}

myself.bankAccount.deposit(3000)
console.log(myself)