"use strict";
function Greeting(greeting) {
    this.greeting = greeting;
}
Greeting.prototype.greet = function () {
    return 'Hello' + this.greeting;
};
var greeter = new Greeting('holla');
var button = document.createElement('button');
button.textContent = 'Click me';
button.addEventListener('click', function () {
    console.log(greeter.greet());
});
document.body.appendChild(button);
