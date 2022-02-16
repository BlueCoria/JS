// todo- Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
// let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']

// let str = 'Каждый охотник желает знать';
//  let stringToarray = (arr) =>{
//      return  arr.split(' ');
//  }
// console.log(stringToarray(str))


// todo - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
// let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый

// let str = 'Каждый охотник желает знать';
// let deleteCharacters = (arr, length) =>{
//     return document.write(arr.substr(0,length))
// }
// deleteCharacters(str,7)

// todo- Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
// let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

// let str = "HTML JavaScript PHP";
// let insertDash = (arr) =>{
//     let replaceAll = arr.replaceAll(' ', '-')
//     let toUpperCase = replaceAll.toUpperCase()
//     return document.write(toUpperCase)
// }
// insertDash(str)


// todo- Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.

// let str = 'hello okten web'
// let letterRegister = (array) =>{
//     for (let i = 0; i < array.length; i++) {
//         if (i === 0) {console.log (array[0].toUpperCase()+array.slice(1))}
//     }
// }
//     letterRegister(str)


// todo- Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.

// let str = 'hello okten web'
//
// let capitalize = (array) =>{
//    let arraySplit = array.split(' ')
//     let sliceArrayWord = arraySplit.map(word => word.charAt(0).toUpperCase()+word.slice(1))
//     let result = sliceArrayWord.join(' ')
//     console.log(result)
// }
// capitalize(str)
