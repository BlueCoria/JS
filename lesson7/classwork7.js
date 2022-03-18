// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// function Car(model, producer, graduation_year, max_speed, engine_capacity) {
//     this.model = model
//     this.producer = producer
//     this.graduation_year = graduation_year
//     this.max_speed = max_speed
//     this.engine_capacity = engine_capacity
//
//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${this.max_speed} на годину`)
//     }
//     this.info = function () {
//         for (const key in this) {
//             if (typeof this[key] !== 'function') console.log(`${key} - ${this[key]}`)
//         }
//     }
//     this.increaseMaxSpeed = function (newSpeed) {
//         this.max_speed = this.max_speed + newSpeed
//     }
//     this.changeYear = function (newValue) {
//         this.graduation_year = newValue;
//     }
//     this.addDriver = function (driver) {
//         this.driver = driver;
//     }
// }
//
// let CarType = new Car ('500', 'Fiat', 2020, 150, 1.4)
//
// console.log(CarType);
// CarType.drive();
// CarType.info();
// CarType.increaseMaxSpeed(20);
// CarType.drive();
// CarType.changeYear(2010)
// CarType.info();
// CarType.addDriver('Anna')
// console.log(CarType)

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна
// швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// class Car{
//     constructor(model, producer, graduation_year, max_speed, engine_capacity){
//         this.model = model
//         this.producer = producer
//         this.graduation_year = graduation_year
//         this.max_speed = max_speed
//         this.enqine_capacity = engine_capacity
//     }
//     drive() {
//         console.log(`їдемо зі швидкістю ${this.max_speed} на годину`);
//     }
//     info() {
//         for (const key in this) {
//             console.log(`${key} - ${this[key]}`)
//         }
//     }
//     increaseMaxSpeed (newSpeed) {
//         this.max_speed = this.max_speed + newSpeed;
//     }
//     changeYear (newValue) {
//         this.graduation_year = newValue;
//     }
//     addDriver (driver) {
//         this.driver = driver;
//     }
// }
//
// let CarType = new Car('Beetle', 'Volksvagen', 2020, 230, 2.0)
//
// console.log(CarType);
// CarType.drive();
// CarType.info();
// CarType.increaseMaxSpeed(40);
// CarType.drive();
// CarType.changeYear(2022)
// CarType.info();
// CarType.addDriver('Olga')
// console.log(CarType)

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

class Cinderella {constructor(name, age, shoseSize) {
    this.name = name
    this.age = age
    this.shoseSize = shoseSize
}
}
let Cinderellas = [
    new Cinderella('Anna',18,36),
    new Cinderella('Jenny', 20, 37),
    new Cinderella('Ella', 18,35 ),
    new Cinderella('Sara',19,37),
    new Cinderella('Olga',22,40),
    new Cinderella('Katrin',33,43),
    new Cinderella('Elsa',21,39),
    new Cinderella('Rebekka',20,35),
    new Cinderella('Iren',25,39),
    new Cinderella('Eleonora',27,39)
    ]
console.log(Cinderellas);

class Princ {
    constructor(name, age, findShoseSize) {
        this.name = name;
        this.age = age;
        this.findShoseSize = findShoseSize;
    }
}
let prince = new Princ('Albert', 30, 35);

let newCouple = (Cinderellas, prince) => {
    for (let item of Cinderellas) {
        if (item.shoseSize === prince.findShoseSize) {
            return `tvoya populushka: ${item.name}`
        }
    }
};
console.log(newCouple(Cinderellas, prince))

let emptyCinderellas = Cinderellas.find((item) => item.shoseSize === prince.findShoseSize);
console.log(emptyCinderellas);