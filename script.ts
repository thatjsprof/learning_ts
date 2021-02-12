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

class David extends Person {
    constructor(name: string) {
        super(name = 'David')
        this.password = 'holla'
    }

    printPassword() {
        console.log(this.password)
    }
}

class Plants {
    private _species: string = "Default"

    set species(value: string) {
        if (value.length > 3) {
            this._species = value
        }
    } 

    get species() {
        return this._species
    }
}

class Helpers {
    static PI: number = 3.14
}

Helpers.PI

abstract class Project {
    // you have to always inherit from abstract classes
    abstract changeName(value: string): void // has to be implemented in inherited classes
}

class OnlyOne {
    public readonly name
    private static instance: OnlyOne
    private constructor(name: string) {
        this.name = name
    }

    static getInstance() {
        if (!OnlyOne.instance) {
            OnlyOne.instance = new OnlyOne('The only instance')
        }
        return OnlyOne.instance
    }
}

// class Car {
//     public name: string
//     public acceleration: number = 0

//     constructor(name: string) {
//         this.name = name
//     }

//     public honk(): void {
//         console.log('Tooot')
//     }

//     public accelerate(speed: number): void {
//         this.acceleration = this.acceleration + speed
//     }
// }

// let car1 = new Car('BMW')
// car.honk()
// console.log(car.acceleration)
// car.accelerate()
// console.log(car.acceleration)

abstract class baseObject {
    width: number = 0
    length: number = 0
}

class Rectangle extends baseObject {
    calcSize(): number {
        return this.width * this.length
    }
}

let rectangle = new Rectangle()
console.log(rectangle.calcSize())

class Person1 {
    private _firstname: string = ""

    set firstname(value: string) {
        if (value.length > 3) {
            this._firstname = value
        }
    }

    get firstname(): string {
        return this._firstname
    }

    enumerable: boolean = true
    configurable: boolean = true
}