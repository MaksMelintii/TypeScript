let myString: string = "Hello, TypeScript";
let myNumber: number = 42;
let myBoolean: boolean = true;
let myAny: any = "Could be anything";

console.log(myString);
console.log(myNumber);
console.log(myBoolean);
console.log(myAny);

let stringArray: string[] = ["one", "two", "three"];
let numberArray: number[] = [1, 2, 3];

console.log(stringArray);
console.log(numberArray);

function printMessage(message: string, count: number = 1): void {
    for (let i = 0; i < count; i++) {
        console.log(message);
    }
}

// Виклик функції з переданими двома аргументами
printMessage("Hello, TypeScript!", 3);

// Виклик функції без переданого числа (використається значення за замовчуванням)
printMessage("Hello, world!");



