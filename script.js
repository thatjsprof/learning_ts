"use strict";
// type: string
var string = 'holla';
// type: number
var number = 21;
// type: any
var variable = '1';
// type: array
var array = ['holla', 'thanks'];
// type: tuple
var tuple = [34, 'holla'];
// type: enum
var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Green"] = 100] = "Green";
    Color[Color["Blue"] = 101] = "Blue";
})(Color || (Color = {}));
// type: any
var car = 'dkldls';
car = 213;
// functions and types
function returnName() {
    return 'David';
}
function sayHello() {
    console.log('hello');
}
function multi(value1, value2) {
    return value1 * value2;
}
// functions as types
var myFunction;
myFunction = multi;
// Objects as types
var object = {
    name: 'holla',
    age: 12
};
var complexObject = {
    data: [12, 12, 3],
    output: function (all) {
        return this.data;
    }
};
// union types
var age = 21;
age = true;
'kkdcd';
// check types
var variable1 = 21;
if (typeof variable1 == "number") {
    console.log('variable is a number');
}
// nullable type
var value = 1;
function never() {
    throw new Error('not available');
}
var bankAccount = {
    money: 2000,
    deposit: function (value) {
        this.money = value;
    }
};
var myself = {
    name: 'max',
    bankAccount: bankAccount,
    hobbies: ["sports", "cooking"]
};
myself.bankAccount.deposit(3000);
console.log(myself);
