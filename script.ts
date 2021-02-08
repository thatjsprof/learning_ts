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