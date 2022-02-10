// todo- Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
// let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']

// let str = 'Каждый охотник желает знать';
// let arr = str.split(' ');
// console.log(arr)

// todo - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
// let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый

// let str = 'Каждый охотник желает знать';
// document.write(str.substr(0,7))

// todo- Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
// let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

// let str = "HTML JavaScript PHP";
// let replaceAll = str.replaceAll(' ', '-')
// let toUpperCase = replaceAll.toUpperCase()
// document.write(toUpperCase)

// todo- Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.

// let str = 'hello okten web'
// let result = ''
// for (let i = 0; i < str.length; i++) {
//     if (i === 0) {
//         let letterToUpperCase = str[i].toUpperCase();
//         result = result + letterToUpperCase
//     } else {
//         result = result + str[i]
//     }
// }
// console.log(result)

// todo- Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.

// let capitalize = 'hello okten web'
// let result = ''
// for (let i = 0; i < capitalize.length; i++) {
//     if (i === 0 || i === 6 || i === 12 ){
//         let letterToUpperCase = capitalize[i].toUpperCase();
//         result = result + letterToUpperCase
//     }
//     else {
//         result = result + capitalize[i]
//     }
// }
// console.log(result)