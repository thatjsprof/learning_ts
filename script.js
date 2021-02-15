"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var countDown = function (start) {
    if (start === void 0) { start = 20; }
    if (start > 10) {
        setTimeout(function () {
            console.log('starting');
        }, start);
    }
};
var double = function (value) {
    return value * 2;
};
var greet = function (name) {
    if (name === void 0) { name = 'max'; }
    console.log('My name is' + name);
};
var numbers = [-3, 33, 38, 5];
console.log(Math.min.apply(Math, numbers));
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
        this.name = name;
    }
    Person.prototype.printName = function () {
        console.log(this.name);
    };
    Person.prototype.setType = function (type) {
        this.type = type;
    };
    return Person;
}());
var person = new Person('David');
person.printName();
var David = /** @class */ (function (_super) {
    __extends(David, _super);
    function David(name) {
        var _this = _super.call(this, name = 'David') || this;
        _this.password = 'holla';
        return _this;
    }
    David.prototype.printPassword = function () {
        console.log(this.password);
    };
    return David;
}(Person));
var Plants = /** @class */ (function () {
    function Plants() {
        this._species = "Default";
    }
    Object.defineProperty(Plants.prototype, "species", {
        get: function () {
            return this._species;
        },
        set: function (value) {
            if (value.length > 3) {
                this._species = value;
            }
        },
        enumerable: false,
        configurable: true
    });
    return Plants;
}());
var Helpers = /** @class */ (function () {
    function Helpers() {
    }
    Helpers.PI = 3.14;
    return Helpers;
}());
Helpers.PI;
var Project = /** @class */ (function () {
    function Project() {
    }
    return Project;
}());
var OnlyOne = /** @class */ (function () {
    function OnlyOne(name) {
        this.name = name;
    }
    OnlyOne.getInstance = function () {
        if (!OnlyOne.instance) {
            OnlyOne.instance = new OnlyOne('The only instance');
        }
        return OnlyOne.instance;
    };
    return OnlyOne;
}());
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
var baseObject = /** @class */ (function () {
    function baseObject() {
        this.width = 0;
        this.length = 0;
    }
    return baseObject;
}());
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rectangle.prototype.calcSize = function () {
        return this.width * this.length;
    };
    return Rectangle;
}(baseObject));
var rectangle = new Rectangle();
console.log(rectangle.calcSize());
var Person1 = /** @class */ (function () {
    function Person1() {
        this._firstname = "";
        this.enumerable = true;
        this.configurable = true;
    }
    Object.defineProperty(Person1.prototype, "firstname", {
        get: function () {
            return this._firstname;
        },
        set: function (value) {
            if (value.length > 3) {
                this._firstname = value;
            }
        },
        enumerable: false,
        configurable: true
    });
    return Person1;
}());
