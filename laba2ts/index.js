var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
console.log("-----------------------------------------\u0417\u0430\u0432\u0434\u0430\u043D\u043D\u044F1------------------------------------------------------------");
var Cat = /** @class */ (function () {
    function Cat(name) {
        this.name = name;
        this.legs = 4;
    }
    Cat.prototype.move = function () {
        console.log("".concat(this.name, " \u0445\u043E\u0434\u0438\u0442\u044C \u043D\u0430 ").concat(this.legs, " \u043B\u0430\u043F\u0430\u0445."));
    };
    return Cat;
}());
var Bird = /** @class */ (function () {
    function Bird(name, canFly) {
        this.name = name;
        this.legs = 2;
        this.canFly = canFly;
    }
    Bird.prototype.move = function () {
        if (this.canFly) {
            console.log("".concat(this.name, " \u043B\u0435\u0442\u0438\u0442\u044C."));
        }
        else {
            console.log("".concat(this.name, " \u0445\u043E\u0434\u0438\u0442\u044C \u043D\u0430 ").concat(this.legs, " \u043B\u0430\u043F\u0430\u0445."));
        }
    };
    return Bird;
}());
var Fish = /** @class */ (function () {
    function Fish(name) {
        this.name = name;
    }
    Fish.prototype.move = function () {
        console.log("".concat(this.name, " \u043F\u043B\u0430\u0432\u0430\u0454."));
    };
    return Fish;
}());
var cat = new Cat("Мурчик");
cat.move();
var bird = new Bird("Кеша", true);
bird.move();
var fish = new Fish("Золота рибка");
fish.move();
////////////////////////////////////////////////////////////////////////////////////////    2
console.log("-----------------------------------------\u0417\u0430\u0432\u0434\u0430\u043D\u043D\u044F2------------------------------------------------------------");
var Circle = /** @class */ (function () {
    function Circle(radius) {
        this.radius = radius;
    }
    Circle.prototype.getArea = function () {
        return Math.PI * this.radius * this.radius;
    };
    Circle.prototype.getPerimeter = function () {
        return 2 * Math.PI * this.radius;
    };
    Circle.prototype.scale = function (factor) {
        this.radius *= factor;
    };
    return Circle;
}());
var Rectangle = /** @class */ (function () {
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
    }
    Rectangle.prototype.getArea = function () {
        return this.width * this.height;
    };
    Rectangle.prototype.getPerimeter = function () {
        return 2 * (this.width + this.height);
    };
    Rectangle.prototype.scale = function (factor) {
        this.width *= factor;
        this.height *= factor;
    };
    return Rectangle;
}());
var Triangle = /** @class */ (function () {
    function Triangle(sideA, sideB, sideC) {
        this.sideA = sideA;
        this.sideB = sideB;
        this.sideC = sideC;
    }
    Triangle.prototype.getArea = function () {
        // Формула Герона для обчислення площі трикутника
        var s = this.getPerimeter() / 2;
        return Math.sqrt(s * (s - this.sideA) * (s - this.sideB) * (s - this.sideC));
    };
    Triangle.prototype.getPerimeter = function () {
        return this.sideA + this.sideB + this.sideC;
    };
    Triangle.prototype.scale = function (factor) {
        this.sideA *= factor;
        this.sideB *= factor;
        this.sideC *= factor;
    };
    return Triangle;
}());
var shapes = [
    new Circle(5),
    new Rectangle(4, 6),
    new Triangle(3, 4, 5)
];
// Обчислення загальної площі та периметру
var totalArea = 0;
var totalPerimeter = 0;
for (var _i = 0, shapes_1 = shapes; _i < shapes_1.length; _i++) {
    var shape = shapes_1[_i];
    totalArea += shape.getArea();
    totalPerimeter += shape.getPerimeter();
}
console.log("\u0417\u0430\u0433\u0430\u043B\u044C\u043D\u0430 \u043F\u043B\u043E\u0449\u0430 \u0432\u0441\u0456\u0445 \u0444\u0456\u0433\u0443\u0440: ".concat(totalArea));
console.log("\u0417\u0430\u0433\u0430\u043B\u044C\u043D\u0438\u0439 \u043F\u0435\u0440\u0438\u043C\u0435\u0442\u0440 \u0432\u0441\u0456\u0445 \u0444\u0456\u0433\u0443\u0440: ".concat(totalPerimeter));
// Приклад масштабування фігур
shapes.forEach(function (shape) { return shape.scale(2); });
console.log("Після масштабування фігур у 2 рази:");
totalArea = 0;
totalPerimeter = 0;
for (var _a = 0, shapes_2 = shapes; _a < shapes_2.length; _a++) {
    var shape = shapes_2[_a];
    totalArea += shape.getArea();
    totalPerimeter += shape.getPerimeter();
}
console.log("\u0417\u0430\u0433\u0430\u043B\u044C\u043D\u0430 \u043F\u043B\u043E\u0449\u0430 \u043F\u0456\u0441\u043B\u044F \u043C\u0430\u0441\u0448\u0442\u0430\u0431\u0443\u0432\u0430\u043D\u043D\u044F: ".concat(totalArea));
console.log("\u0417\u0430\u0433\u0430\u043B\u044C\u043D\u0438\u0439 \u043F\u0435\u0440\u0438\u043C\u0435\u0442\u0440 \u043F\u0456\u0441\u043B\u044F \u043C\u0430\u0441\u0448\u0442\u0430\u0431\u0443\u0432\u0430\u043D\u043D\u044F: ".concat(totalPerimeter));
//////////////////////////////////////////////////////////////////////////////////////////////////3
console.log("-----------------------------------------\u0417\u0430\u0432\u0434\u0430\u043D\u043D\u044F3------------------------------------------------------------");
var Car = /** @class */ (function () {
    function Car(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    Car.prototype.getYear = function () {
        return this.year;
    };
    return Car;
}());
var BMW = /** @class */ (function (_super) {
    __extends(BMW, _super);
    function BMW(model, year, engineType) {
        var _this = _super.call(this, "BMW", model, year) || this; // Виклик конструктора батьківського класу
        _this.engineType = engineType;
        return _this;
    }
    BMW.prototype.displayInfo = function () {
        console.log("-------------------------------");
        console.log("\u041C\u0430\u0440\u043A\u0430: ".concat(this.brand));
        console.log("\u041C\u043E\u0434\u0435\u043B\u044C: ".concat(this.model));
        console.log("\u0420\u0456\u043A: ".concat(this.getYear()));
        console.log("\u0422\u0438\u043F \u0434\u0432\u0438\u0433\u0443\u043D\u0430: ".concat(this.engineType));
        console.log("-------------------------------");
    };
    return BMW;
}(Car));
var Toyota = /** @class */ (function (_super) {
    __extends(Toyota, _super);
    function Toyota(model, year, fuelType) {
        var _this = _super.call(this, "Toyota", model, year) || this; // Виклик конструктора батьківського класу
        _this.fuelType = fuelType;
        return _this;
    }
    Toyota.prototype.displayInfo = function () {
        console.log("-------------------------------");
        console.log("\u041C\u0430\u0440\u043A\u0430: ".concat(this.brand));
        console.log("\u041C\u043E\u0434\u0435\u043B\u044C: ".concat(this.model));
        console.log("\u0420\u0456\u043A: ".concat(this.getYear()));
        console.log("\u0422\u0438\u043F \u043F\u0430\u043B\u044C\u043D\u043E\u0433\u043E: ".concat(this.fuelType));
        console.log("-------------------------------");
    };
    return Toyota;
}(Car));
var Mercedes = /** @class */ (function (_super) {
    __extends(Mercedes, _super);
    function Mercedes(model, year, luxuryLevel) {
        var _this = _super.call(this, "Mercedes", model, year) || this; // Виклик конструктора батьківського класу
        _this.luxuryLevel = luxuryLevel;
        return _this;
    }
    Mercedes.prototype.displayInfo = function () {
        console.log("-------------------------------");
        console.log("\u041C\u0430\u0440\u043A\u0430: ".concat(this.brand));
        console.log("\u041C\u043E\u0434\u0435\u043B\u044C: ".concat(this.model));
        console.log("\u0420\u0456\u043A: ".concat(this.getYear()));
        console.log("\u0420\u0456\u0432\u0435\u043D\u044C \u043A\u043E\u043C\u0444\u043E\u0440\u0442\u0443: ".concat(this.luxuryLevel));
        console.log("-------------------------------");
    };
    return Mercedes;
}(Car));
// Створення екземплярів BMW
var bmwX5 = new BMW("M5", 2021, "V8");
var bmwX3 = new BMW("M4", 2023, "I6");
// Створення екземплярів Toyota
var toyotaCamry = new Toyota("Camry", 2019, "Бензин");
var toyotaPrius = new Toyota("Prius", 2021, "Гібрид");
// Створення екземплярів Mercedes
var mercedesSClass = new Mercedes("S-Class", 2022, "Високий");
var mercedesEClass = new Mercedes("E-Class", 2021, "Середній");
// Виведення інформації про автомобілі
bmwX5.displayInfo();
bmwX3.displayInfo();
toyotaCamry.displayInfo();
toyotaPrius.displayInfo();
mercedesSClass.displayInfo();
mercedesEClass.displayInfo();
//////////////////////////////////////////////////////////////////////////////////////////////////4
console.log("-----------------------------------------\u0417\u0430\u0432\u0434\u0430\u043D\u043D\u044F4------------------------------------------------------------");
var Employee = /** @class */ (function () {
    function Employee(name, age, salary) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }
    // Реалізація методу з інтерфейсу Payable
    Employee.prototype.pay = function () {
        console.log("".concat(this.name, " \u043E\u0442\u0440\u0438\u043C\u0443\u0454 \u0437\u0430\u0440\u043F\u043B\u0430\u0442\u0443 ").concat(this.salary));
    };
    return Employee;
}());
var Developer = /** @class */ (function (_super) {
    __extends(Developer, _super);
    function Developer(name, age, salary) {
        return _super.call(this, name, age, salary) || this;
    }
    // Бонус 10% від зарплати
    Developer.prototype.getAnnualBonus = function () {
        return this.salary * 0.1;
    };
    // Метод pay для виплати зарплати
    Developer.prototype.pay = function () {
        _super.prototype.pay.call(this);
        console.log("\u0420\u0456\u0447\u043D\u0438\u0439 \u0431\u043E\u043D\u0443\u0441 \u0440\u043E\u0437\u0440\u043E\u0431\u043D\u0438\u043A\u0430 ".concat(this.name, ": ").concat(this.getAnnualBonus()));
    };
    return Developer;
}(Employee));
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(name, age, salary) {
        return _super.call(this, name, age, salary) || this;
    }
    // Бонус 20% від зарплати
    Manager.prototype.getAnnualBonus = function () {
        return this.salary * 0.2;
    };
    // Метод pay для виплати зарплати
    Manager.prototype.pay = function () {
        _super.prototype.pay.call(this);
        console.log("\u0420\u0456\u0447\u043D\u0438\u0439 \u0431\u043E\u043D\u0443\u0441 \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u0430 ".concat(this.name, ": ").concat(this.getAnnualBonus()));
    };
    return Manager;
}(Employee));
// Створюємо масив співробітників типу Employee
var employees = [
    new Developer("Alice", 30, 50000),
    new Developer("Bob", 25, 60000),
    new Manager("Charlie", 40, 80000),
    new Manager("Diana", 35, 90000)
];
// Обчислюємо загальну річну суму бонусів
var totalBonus = 0;
employees.forEach(function (employee) {
    employee.pay();
    totalBonus += employee.getAnnualBonus();
});
console.log("\u0417\u0430\u0433\u0430\u043B\u044C\u043D\u0430 \u0440\u0456\u0447\u043D\u0430 \u0441\u0443\u043C\u0430 \u0431\u043E\u043D\u0443\u0441\u0456\u0432: ".concat(totalBonus));
//////////////////////////////////////////////////////////////////////////////////////////////////5
console.log("-----------------------------------------\u0417\u0430\u0432\u0434\u0430\u043D\u043D\u044F5------------------------------------------------------------");
var OnlineCourse = /** @class */ (function () {
    function OnlineCourse(name, duration) {
        this.name = name;
        this.duration = duration;
        this.students = [];
    }
    // Метод для реєстрації студента на курс
    OnlineCourse.prototype.registerStudent = function (student) {
        if (!this.isStudentRegistered(student)) {
            this.students.push(student);
            console.log("".concat(student, " \u0437\u0430\u0440\u0435\u0454\u0441\u0442\u0440\u043E\u0432\u0430\u043D\u0438\u0439 \u043D\u0430 \u043A\u0443\u0440\u0441 ").concat(this.name));
        }
        else {
            console.log("".concat(student, " \u0432\u0436\u0435 \u0437\u0430\u0440\u0435\u0454\u0441\u0442\u0440\u043E\u0432\u0430\u043D\u0438\u0439 \u043D\u0430 \u043A\u0443\u0440\u0441 ").concat(this.name));
        }
    };
    // Метод для перевірки, чи студент вже зареєстрований
    OnlineCourse.prototype.isStudentRegistered = function (student) {
        return this.students.indexOf(student) !== -1;
    };
    return OnlineCourse;
}());
var CourseManager = /** @class */ (function () {
    function CourseManager() {
        this.courses = [];
    }
    // Метод для додавання курсу
    CourseManager.prototype.addCourse = function (course) {
        this.courses.push(course);
        console.log("\u041A\u0443\u0440\u0441 ".concat(course.name, " \u0434\u043E\u0434\u0430\u043D\u0438\u0439."));
    };
    // Метод для видалення курсу за назвою
    CourseManager.prototype.removeCourse = function (courseName) {
        this.courses = this.courses.filter(function (course) { return course.name !== courseName; });
        console.log("\u041A\u0443\u0440\u0441 ".concat(courseName, " \u0432\u0438\u0434\u0430\u043B\u0435\u043D\u0438\u0439."));
    };
    // Метод для пошуку курсу за назвою
    CourseManager.prototype.findCourse = function (courseName) {
        for (var _i = 0, _a = this.courses; _i < _a.length; _i++) {
            var course = _a[_i];
            if (course.name === courseName) {
                return course;
            }
        }
        return undefined;
    };
    // Метод для виведення списку курсів та студентів
    CourseManager.prototype.listCourses = function () {
        this.courses.forEach(function (course) {
            console.log("\u041A\u0443\u0440\u0441: ".concat(course.name, ", \u0422\u0440\u0438\u0432\u0430\u043B\u0456\u0441\u0442\u044C: ").concat(course.duration, " \u0433\u043E\u0434\u0438\u043D, \u0421\u0442\u0443\u0434\u0435\u043D\u0442\u0438: [").concat(course.students.join(', '), "]"));
        });
    };
    return CourseManager;
}());
// Створення курсів
var jsCourse = new OnlineCourse("JavaScript", 30);
var tsCourse = new OnlineCourse("TypeScript", 20);
var pythonCourse = new OnlineCourse("Python", 40);
// Створення менеджера курсів
var courseManager = new CourseManager();
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
var foundCourse = courseManager.findCourse("Python");
if (foundCourse) {
    console.log("\u0417\u043D\u0430\u0439\u0434\u0435\u043D\u043E \u043A\u0443\u0440\u0441: ".concat(foundCourse.name));
}
// Виведення всіх курсів і зареєстрованих студентів
courseManager.listCourses();
/////////////////////////////////////////////////////////////////////////////////////////////////6
console.log("-----------------------------------------\u0417\u0430\u0432\u0434\u0430\u043D\u043D\u044F6------------------------------------------------------------");
var Book = /** @class */ (function () {
    function Book(title, author, numberOfPages) {
        this.isBorrowed = false;
        this.title = title;
        this.author = author;
        this.numberOfPages = numberOfPages;
    }
    Book.prototype.borrow = function () {
        if (!this.isBorrowed) {
            this.isBorrowed = true;
            console.log("\u041A\u043D\u0438\u0433\u0430 \"".concat(this.title, "\" \u043F\u043E\u0437\u0438\u0447\u0435\u043D\u0430."));
        }
        else {
            console.log("\u041A\u043D\u0438\u0433\u0430 \"".concat(this.title, "\" \u0432\u0436\u0435 \u043F\u043E\u0437\u0438\u0447\u0435\u043D\u0430."));
        }
    };
    return Book;
}());
var Magazine = /** @class */ (function () {
    function Magazine(title, author, issueNumber) {
        this.isBorrowed = false;
        this.title = title;
        this.author = author;
        this.issueNumber = issueNumber;
    }
    Magazine.prototype.borrow = function () {
        if (!this.isBorrowed) {
            this.isBorrowed = true;
            console.log("\u0416\u0443\u0440\u043D\u0430\u043B \"".concat(this.title, "\" (\u0432\u0438\u043F\u0443\u0441\u043A \u2116").concat(this.issueNumber, ") \u043F\u043E\u0437\u0438\u0447\u0435\u043D\u0438\u0439."));
        }
        else {
            console.log("\u0416\u0443\u0440\u043D\u0430\u043B \"".concat(this.title, "\" (\u0432\u0438\u043F\u0443\u0441\u043A \u2116").concat(this.issueNumber, ") \u0432\u0436\u0435 \u043F\u043E\u0437\u0438\u0447\u0435\u043D\u0438\u0439."));
        }
    };
    return Magazine;
}());
var DVD = /** @class */ (function () {
    function DVD(title, author, duration) {
        this.isBorrowed = false;
        this.title = title;
        this.author = author;
        this.duration = duration;
    }
    DVD.prototype.borrow = function () {
        if (!this.isBorrowed) {
            this.isBorrowed = true;
            console.log("DVD \"".concat(this.title, "\" \u0442\u0440\u0438\u0432\u0430\u043B\u0456\u0441\u0442\u044E ").concat(this.duration, " \u0445\u0432\u0438\u043B\u0438\u043D \u043F\u043E\u0437\u0438\u0447\u0435\u043D\u0438\u0439."));
        }
        else {
            console.log("DVD \"".concat(this.title, "\" \u0432\u0436\u0435 \u043F\u043E\u0437\u0438\u0447\u0435\u043D\u0438\u0439."));
        }
    };
    return DVD;
}());
var Library = /** @class */ (function () {
    function Library() {
        this.items = [];
    }
    // Додавання елементу до бібліотеки
    Library.prototype.addItem = function (item) {
        this.items.push(item);
        console.log("\u0415\u043B\u0435\u043C\u0435\u043D\u0442 \"".concat(item.title, "\" \u0434\u043E\u0434\u0430\u043D\u0438\u0439 \u0434\u043E \u0431\u0456\u0431\u043B\u0456\u043E\u0442\u0435\u043A\u0438."));
    };
    // Пошук елементу за назвою
    Library.prototype.findItemByName = function (name) {
        for (var _i = 0, _a = this.items; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.title === name) {
                return item;
            }
        }
        return undefined;
    };
    // Виведення списку доступних елементів
    Library.prototype.listAvailableItems = function () {
        console.log("Доступні елементи:");
        this.items.forEach(function (item) {
            if (!item.isBorrowed) {
                console.log("- ".concat(item.title, " (").concat(item.author, ")"));
            }
        });
    };
    return Library;
}());
// Створення бібліотеки
var library = new Library();
// Створення різних бібліотечних елементів
var book1 = new Book("To Kill a Mockingbird", "Harper Lee", 281);
var magazine1 = new Magazine("National Geographic", "Various Authors", 2023);
var dvd1 = new DVD("The Matrix", "Wachowski Sisters", 136);
// Додавання елементів до бібліотеки
library.addItem(book1);
library.addItem(magazine1);
library.addItem(dvd1);
// Список доступних елементів
library.listAvailableItems();
// Позичаємо книгу
var foundItem = library.findItemByName("To Kill a Mockingbird");
if (foundItem) {
    foundItem.borrow();
}
// Список доступних елементів після позичання
library.listAvailableItems();
