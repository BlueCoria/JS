/*
    Використовуючи данні з масиву, за допомоги document.write та циклу
    побудувати структуру по шаблону template1.1
                                                                        */

let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
document.write(`<ul>`)
    for (let i = 0; i < listOfItems.length; i++) {
        let listOfItemsElement = listOfItems[i]
        document.write(`<li>${listOfItemsElement}</li>`)
    }
document.write(`</ul>`)