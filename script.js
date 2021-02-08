"use strict";
var string = 'holla';
var number = 21;
var variable = '1';
var array = ['holla', 'thanks'];
var tuple = [34, 'holla'];
var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var myColor = Color.Green;
