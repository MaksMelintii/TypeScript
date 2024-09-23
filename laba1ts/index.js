var myString = "Hello, TypeScript";
var myNumber = 42;
var myBoolean = true;
var myAny = "Could be anything";
console.log(myString);
console.log(myNumber);
console.log(myBoolean);
console.log(myAny);
var stringArray = ["one", "two", "three"];
var numberArray = [1, 2, 3];
console.log(stringArray);
console.log(numberArray);
function printMessage(message, count) {
    if (count === void 0) { count = 1; }
    for (var i = 0; i < count; i++) {
        console.log(message);
    }
}
// Виклик функції з переданими двома аргументами
printMessage("Hello, TypeScript!", 3);
// Виклик функції без переданого числа (використається значення за замовчуванням)
printMessage("Hello, world!");
