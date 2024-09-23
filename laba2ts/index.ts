console.log(`-----------------------------------------Завдання1------------------------------------------------------------`);
interface Animal {
    name: string;  // Ім'я тварини
    legs?: number; // Кількість лап 
    canFly?: boolean; // Можливість літати 
    move(): void; // Метод для пересування
}

class Cat implements Animal {
    name: string;
    legs: number;

    constructor(name: string) {
        this.name = name;
        this.legs = 4;
    }

    move(): void {
        console.log(`${this.name} ходить на ${this.legs} лапах.`);
    }
}

class Bird implements Animal {
    name: string;
    legs: number;
    canFly: boolean;

    constructor(name: string, canFly: boolean) {
        this.name = name;
        this.legs = 2;
        this.canFly = canFly;
    }

    move(): void {
        if (this.canFly) {
            console.log(`${this.name} летить.`);
        } else {
            console.log(`${this.name} ходить на ${this.legs} лапах.`);
        }
    }
}

class Fish implements Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    move(): void {
        console.log(`${this.name} плаває.`);
    }
}

const cat = new Cat("Мурчик");
cat.move();

const bird = new Bird("Кеша", true);
bird.move();

const fish = new Fish("Золота рибка");
fish.move();

////////////////////////////////////////////////////////////////////////////////////////    2
console.log(`-----------------------------------------Завдання2------------------------------------------------------------`);

interface Shape {
    getArea(): number;
    getPerimeter(): number;
    scale(factor: number): void; // Метод для масштабування
}

class Circle implements Shape {
    radius: number;

    constructor(radius: number) {
        this.radius = radius;
    }

    getArea(): number {
        return Math.PI * this.radius * this.radius;
    }

    getPerimeter(): number {
        return 2 * Math.PI * this.radius;
    }

    scale(factor: number): void {
        this.radius *= factor;
    }
}

class Rectangle implements Shape {
    width: number;
    height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    getArea(): number {
        return this.width * this.height;
    }

    getPerimeter(): number {
        return 2 * (this.width + this.height);
    }

    scale(factor: number): void {
        this.width *= factor;
        this.height *= factor;
    }
}

class Triangle implements Shape {
    sideA: number;
    sideB: number;
    sideC: number;

    constructor(sideA: number, sideB: number, sideC: number) {
        this.sideA = sideA;
        this.sideB = sideB;
        this.sideC = sideC;
    }

    getArea(): number {
        // Формула Герона для обчислення площі трикутника
        const s = this.getPerimeter() / 2;
        return Math.sqrt(s * (s - this.sideA) * (s - this.sideB) * (s - this.sideC));
    }

    getPerimeter(): number {
        return this.sideA + this.sideB + this.sideC;
    }

    scale(factor: number): void {
        this.sideA *= factor;
        this.sideB *= factor;
        this.sideC *= factor;
    }
}

const shapes: Shape[] = [
    new Circle(5),
    new Rectangle(4, 6),
    new Triangle(3, 4, 5)
];

// Обчислення загальної площі та периметру
let totalArea = 0;
let totalPerimeter = 0;

for (const shape of shapes) {
    totalArea += shape.getArea();
    totalPerimeter += shape.getPerimeter();
}

console.log(`Загальна площа всіх фігур: ${totalArea}`);
console.log(`Загальний периметр всіх фігур: ${totalPerimeter}`);

// Приклад масштабування фігур
shapes.forEach(shape => shape.scale(2));

console.log("Після масштабування фігур у 2 рази:");

totalArea = 0;
totalPerimeter = 0;

for (const shape of shapes) {
    totalArea += shape.getArea();
    totalPerimeter += shape.getPerimeter();
}

console.log(`Загальна площа після масштабування: ${totalArea}`);
console.log(`Загальний периметр після масштабування: ${totalPerimeter}`);
//////////////////////////////////////////////////////////////////////////////////////////////////3
console.log(`-----------------------------------------Завдання3------------------------------------------------------------`);

abstract class Car {
    public brand: string; 
    protected model: string;
    private year: number; 

    constructor(brand: string, model: string, year: number) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    public abstract displayInfo(): void;

    protected getYear(): number {
        return this.year;
    }
}

class BMW extends Car {
    private engineType: string;

    constructor(model: string, year: number, engineType: string) {
        super("BMW", model, year); // Виклик конструктора батьківського класу
        this.engineType = engineType;
    }

    public displayInfo(): void {
        console.log(`-------------------------------`);
        console.log(`Марка: ${this.brand}`);
        console.log(`Модель: ${this.model}`);
        console.log(`Рік: ${this.getYear()}`);
        console.log(`Тип двигуна: ${this.engineType}`);
        console.log(`-------------------------------`);
    }
}

class Toyota extends Car {
    private fuelType: string; // Приватна властивість для типу пального

    constructor(model: string, year: number, fuelType: string) {
        super("Toyota", model, year); // Виклик конструктора батьківського класу
        this.fuelType = fuelType;
    }

    public displayInfo(): void {
        console.log(`-------------------------------`);
        console.log(`Марка: ${this.brand}`);
        console.log(`Модель: ${this.model}`);
        console.log(`Рік: ${this.getYear()}`);
        console.log(`Тип пального: ${this.fuelType}`);
        console.log(`-------------------------------`);
    }
}

class Mercedes extends Car {
    private luxuryLevel: string; // Приватна властивість для рівня комфорту

    constructor(model: string, year: number, luxuryLevel: string) {
        super("Mercedes", model, year); // Виклик конструктора батьківського класу
        this.luxuryLevel = luxuryLevel;
    }

    public displayInfo(): void {
        console.log(`-------------------------------`);
        console.log(`Марка: ${this.brand}`);
        console.log(`Модель: ${this.model}`);
        console.log(`Рік: ${this.getYear()}`);
        console.log(`Рівень комфорту: ${this.luxuryLevel}`);
        console.log(`-------------------------------`);
    }
}

// Створення екземплярів BMW
const bmwX5 = new BMW("M5", 2021, "V8");
const bmwX3 = new BMW("M4", 2023, "I6");

// Створення екземплярів Toyota
const toyotaCamry = new Toyota("Camry", 2019, "Бензин");
const toyotaPrius = new Toyota("Prius", 2021, "Гібрид");

// Створення екземплярів Mercedes
const mercedesSClass = new Mercedes("S-Class", 2022, "Високий");
const mercedesEClass = new Mercedes("E-Class", 2021, "Середній");

// Виведення інформації про автомобілі
bmwX5.displayInfo();
bmwX3.displayInfo();

toyotaCamry.displayInfo();
toyotaPrius.displayInfo();

mercedesSClass.displayInfo();
mercedesEClass.displayInfo();

//////////////////////////////////////////////////////////////////////////////////////////////////4
console.log(`-----------------------------------------Завдання4------------------------------------------------------------`);

interface Payable {
    pay(): void;
}

abstract class Employee implements Payable {
    protected name: string;
    protected age: number;
    protected salary: number;

    constructor(name: string, age: number, salary: number) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }

    // Абстрактний метод для отримання річного бонусу
    public abstract getAnnualBonus(): number;

    // Реалізація методу з інтерфейсу Payable
    public pay(): void {
        console.log(`${this.name} отримує зарплату ${this.salary}`);
    }
}

class Developer extends Employee {
    constructor(name: string, age: number, salary: number) {
        super(name, age, salary);
    }

    // Бонус 10% від зарплати
    public getAnnualBonus(): number {
        return this.salary * 0.1;
    }

    // Метод pay для виплати зарплати
    public pay(): void {
        super.pay();
        console.log(`Річний бонус розробника ${this.name}: ${this.getAnnualBonus()}`);
    }
}

class Manager extends Employee {
    constructor(name: string, age: number, salary: number) {
        super(name, age, salary);
    }

    // Бонус 20% від зарплати
    public getAnnualBonus(): number {
        return this.salary * 0.2;
    }

    // Метод pay для виплати зарплати
    public pay(): void {
        super.pay();
        console.log(`Річний бонус менеджера ${this.name}: ${this.getAnnualBonus()}`);
    }
}

// Створюємо масив співробітників типу Employee
const employees: Employee[] = [
    new Developer("Alice", 30, 50000),
    new Developer("Bob", 25, 60000),
    new Manager("Charlie", 40, 80000),
    new Manager("Diana", 35, 90000)
];

// Обчислюємо загальну річну суму бонусів
let totalBonus: number = 0;

employees.forEach(employee => {
    employee.pay();
    totalBonus += employee.getAnnualBonus();
});

console.log(`Загальна річна сума бонусів: ${totalBonus}`);

//////////////////////////////////////////////////////////////////////////////////////////////////5
console.log(`-----------------------------------------Завдання5------------------------------------------------------------`);

interface Course {
    name: string;
    duration: number; // тривалість курсу в годинах
    students: string[]; // масив студентів
}

class OnlineCourse implements Course {
    public name: string;
    public duration: number;
    public students: string[];

    constructor(name: string, duration: number) {
        this.name = name;
        this.duration = duration;
        this.students = [];
    }

    // Метод для реєстрації студента на курс
    public registerStudent(student: string): void {
        if (!this.isStudentRegistered(student)) {
            this.students.push(student);
            console.log(`${student} зареєстрований на курс ${this.name}`);
        } else {
            console.log(`${student} вже зареєстрований на курс ${this.name}`);
        }
    }

    // Метод для перевірки, чи студент вже зареєстрований
    public isStudentRegistered(student: string): boolean {
        return this.students.indexOf(student) !== -1;
    }
}

class CourseManager {
    private courses: Course[];

    constructor() {
        this.courses = [];
    }

    // Метод для додавання курсу
    public addCourse(course: Course): void {
        this.courses.push(course);
        console.log(`Курс ${course.name} доданий.`);
    }

    // Метод для видалення курсу за назвою
    public removeCourse(courseName: string): void {
        this.courses = this.courses.filter(course => course.name !== courseName);
        console.log(`Курс ${courseName} видалений.`);
    }

    // Метод для пошуку курсу за назвою
    public findCourse(courseName: string): Course | undefined {
        for (let course of this.courses) {
            if (course.name === courseName) {
                return course;
            }
        }
        return undefined;
    }

    // Метод для виведення списку курсів та студентів
    public listCourses(): void {
        this.courses.forEach(course => {
            console.log(`Курс: ${course.name}, Тривалість: ${course.duration} годин, Студенти: [${course.students.join(', ')}]`);
        });
    }
}

// Створення курсів
const jsCourse = new OnlineCourse("JavaScript", 30);
const tsCourse = new OnlineCourse("TypeScript", 20);
const pythonCourse = new OnlineCourse("Python", 40);

// Створення менеджера курсів
const courseManager = new CourseManager();

// Додавання курсів до менеджера
courseManager.addCourse(jsCourse);
courseManager.addCourse(tsCourse);
courseManager.addCourse(pythonCourse);

// Реєстрація студентів на курси
jsCourse.registerStudent("Alice");
jsCourse.registerStudent("Bob");
tsCourse.registerStudent("Charlie");
pythonCourse.registerStudent("Diana");

// Повторна реєстрація студентів
jsCourse.registerStudent("Alice");

// Видалення курсу
courseManager.removeCourse("TypeScript");

// Пошук курсу
const foundCourse = courseManager.findCourse("Python");
if (foundCourse) {
    console.log(`Знайдено курс: ${foundCourse.name}`);
}

// Виведення всіх курсів і зареєстрованих студентів
courseManager.listCourses();
/////////////////////////////////////////////////////////////////////////////////////////////////6
console.log(`-----------------------------------------Завдання6------------------------------------------------------------`);

interface LibraryItem {
    title: string;
    author: string;
    isBorrowed: boolean;
    
    borrow(): void;
}

class Book implements LibraryItem {
    title: string;
    author: string;
    isBorrowed: boolean = false;
    numberOfPages: number;

    constructor(title: string, author: string, numberOfPages: number) {
        this.title = title;
        this.author = author;
        this.numberOfPages = numberOfPages;
    }

    borrow(): void {
        if (!this.isBorrowed) {
            this.isBorrowed = true;
            console.log(`Книга "${this.title}" позичена.`);
        } else {
            console.log(`Книга "${this.title}" вже позичена.`);
        }
    }
}

class Magazine implements LibraryItem {
    title: string;
    author: string;
    isBorrowed: boolean = false;
    issueNumber: number;

    constructor(title: string, author: string, issueNumber: number) {
        this.title = title;
        this.author = author;
        this.issueNumber = issueNumber;
    }

    borrow(): void {
        if (!this.isBorrowed) {
            this.isBorrowed = true;
            console.log(`Журнал "${this.title}" (випуск №${this.issueNumber}) позичений.`);
        } else {
            console.log(`Журнал "${this.title}" (випуск №${this.issueNumber}) вже позичений.`);
        }
    }
}

class DVD implements LibraryItem {
    title: string;
    author: string;
    isBorrowed: boolean = false;
    duration: number; // Тривалість у хвилинах

    constructor(title: string, author: string, duration: number) {
        this.title = title;
        this.author = author;
        this.duration = duration;
    }

    borrow(): void {
        if (!this.isBorrowed) {
            this.isBorrowed = true;
            console.log(`DVD "${this.title}" тривалістю ${this.duration} хвилин позичений.`);
        } else {
            console.log(`DVD "${this.title}" вже позичений.`);
        }
    }
}
class Library {
    private items: LibraryItem[] = [];

    // Додавання елементу до бібліотеки
    addItem(item: LibraryItem): void {
        this.items.push(item);
        console.log(`Елемент "${item.title}" доданий до бібліотеки.`);
    }

    // Пошук елементу за назвою
    findItemByName(name: string): LibraryItem | undefined {
        for (let item of this.items) {
            if (item.title === name) {
                return item;
            }
        }
        return undefined;
    }

    // Виведення списку доступних елементів
    listAvailableItems(): void {
        console.log("Доступні елементи:");
        this.items.forEach(item => {
            if (!item.isBorrowed) {
                console.log(`- ${item.title} (${item.author})`);
            }
        });
    }
}
// Створення бібліотеки
const library = new Library();

// Створення різних бібліотечних елементів
const book1 = new Book("To Kill a Mockingbird", "Harper Lee", 281);
const magazine1 = new Magazine("National Geographic", "Various Authors", 2023);
const dvd1 = new DVD("The Matrix", "Wachowski Sisters", 136);

// Додавання елементів до бібліотеки
library.addItem(book1);
library.addItem(magazine1);
library.addItem(dvd1);

// Список доступних елементів
library.listAvailableItems();

// Позичаємо книгу
const foundItem = library.findItemByName("To Kill a Mockingbird");
if (foundItem) {
    foundItem.borrow();
}

// Список доступних елементів після позичання
library.listAvailableItems();