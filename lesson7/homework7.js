// todo - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
//  створити пустий масив, наповнити його 10 об'єктами new User(....)

// function User(id, name, surname , email, phone){
//     this.id = id
//     this.name = name
//     this.surname = surname
//     this.email = email
//     this.phone = phone
// }
//
// let newUser = [
//     new User(21,'Deborah','Thomas','d.tomas@gmail.com',380938331768),
//     new User(18,'Rebecca','Adams','r.adams@gmail.com',380935863169),
//     new User(20,'Benjamin','Green','b.green@gmail.com',380935955076),
//     new User(10,'Glen','Hayes','g.hayes@gmail.com',380938570592),
//     new User(7,'Donald','Casey','d.casey@gmail.com',380937700761),
//     new User(26,'Judith','Conner','j.conner@gmail.com',380934014925),
//     new User(24,'Peter','Powell','p.powell@gmail.com',380936248533),
//     new User(25,'Erica','Harris','e.harris@gmail.com',380936715082),
//     new User(30,'Christy','Wilson','c.wilson@gmail.com',380939654149),
//     new User(5,'Melissa','Cormick','m.cormick@gmail.com',380935683546),

// console.log(newUser)

// todo - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

// let userFilter = newUser.filter((item)=>{if (item.id%2===0) {return item}})
// console.log(userFilter)

// todo - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

// let userSort = newUser.sort((a,b)=> a.id-b.id )
// console.log(userSort)

// todo - створити класс для об'єктів Client з полями id, name, surname , email, phone, order
//  (поле є масивом зі списком товарів)створити пустий масив, наповнити його 10 об'єктами Client

class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}
let arrayOfClient = [
    new Client(4, 'Travis', 'Hawkins', 't.hawkins@gmail.com', 380932070088, ['copybook', 'pen', 'apples', 'shampoo']),
    new Client(3, 'Michael', 'Myers', 'm.myers@gmail.com', 380935926239, ['cat food']),
    new Client(18, 'Teresa', 'Bowman', 't.bowman@gmail.com', 380939935977, ['sause', 'sausage', 'bread']),
    new Client(21, 'Linda', 'Miller', 'l.miller@gmail.com', 380933678761, ['meat', 'sause']),
    new Client(24, 'James', 'Rose', 'j.rose@gmail.com', 380931546637, ['milk', 'orange']),
    new Client(27, 'Anthony', 'Mitchell', 'a.mitchell@gmail.com', 380932355815, ['dog food', 'cat food']),
    new Client(29, 'Mike', 'Murray', 'm.murray@gmail.com', 380931720772, ['potato', 'meat', 'chewing gum']),
    new Client(28, 'Gary', 'Williams', 'g.williams@gmail.com', 380932154404, ['pepsi', 'fish', 'chips', 'tomato']),
    new Client(8, 'Felicia', 'Jacobs', 'f.jacobs@gmail.com', 380939832893, ['cucumbers']),
    new Client(22, 'Elizabeth', 'Butler', 'e.butler@gmail.com', 380932841278, ['eggs', 'tomato', 'milk']),
]
// console.log(arrayOfClient)

// todo - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

let clientOrdersSort = arrayOfClient.sort((a, b) => a.order.length - b.order.length)
console.log(clientOrdersSort)