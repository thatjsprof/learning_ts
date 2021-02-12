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

const countDown = (start: number = 20) => {
    if (start > 10) {
        setTimeout(() => {
            console.log('starting')
        }, start)
    }
}

let double: (value: number) => number = function (value) {
    return value * 2
} 

let greet = function (name = 'max'): void {
    console.log('My name is' + name)
}

var numbers: number[] = [-3, 33, 38, 5]
console.log(Math.min.apply(Math, numbers))

class Person {
    private type: string
    protected password: string

    constructor(public name: string) {
        this.name = name
    }

    printName() {
        console.log(this.name)
    }

    private setType(type: string) {
        this.type = type
    }
}

const person = new Person('David')
person.printName()

