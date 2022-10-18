let str = '';
let sum = 0;
let product = 1;

for (let count = 10; count < 20; count++) {                     //Виведення на сторінку чисел від 10 до 20
    if(count === 19) {
        str += `${count}.`;
        console.log(`Числа від 10 до 20:\n${str}`);
        break;
    }
    str += `${count}, `;
}

str = '';

for (let count = 10; count < 20; count++) {                     //Виведення квадратів чисел від 10 до 20
    if(count === 19) {
        str += `${count * count}.`;
        console.log(`Квадрати чисел від 10 до 20:\n${str}`);
        break;
    }
    str += `${count * count}, `;
}

str = '';
for (let count = 1; count <= 10; count++) {                     //Виведення таблиці множення 7
    if(count === 10) {
        str += `7 * ${count} = ${7 * count};`;
        console.log(`Таблиця множення на 7:\n${str}`);
        break;
    }
    str += `7 * ${count} = ${7 * count};\n`;
}

//primeNumber-просте число
for (let primeNumber = 1; primeNumber <= 15; primeNumber++) {   //Виведення суми всіх цілих чисел від 1 до 15
    let count = 0;
    for (let divider = 1; divider <= primeNumber; divider++) {      //divider-дільник
        if((primeNumber % divider) === 0) {
            count++;
        }
    }
    if(count === 2) {
        sum += primeNumber;
    }
    if (primeNumber === 15) {
        console.log(`Сума всіх цілих чисел від 1 до 15: ${sum}`);
    }
}

//primeNumber-просте число
for (let primeNumber = 15; primeNumber <= 35; primeNumber++) {  //Виведення добутку всіх цілих чисел від 15 до 35
    let count = 0;
    for (let divider = 1; divider <= primeNumber; divider++) {      //divider-дільник
        if((primeNumber % divider) === 0) {
            count++;
        }
    }
    if(count === 2) {
        product *= primeNumber;
    }
    if (primeNumber === 35) {
        console.log(`Добуток усіх цілих чисел від 15 до 35: ${product}`);
    }
}

sum = 0;
let numberOfIntegers = 0;       //Кількість цілих чисел
for (let primeNumber = 1; primeNumber <= 500; primeNumber++) {  //Виведення середнього арифметичного всіх цілих чисел від 1 до 500
    let count = 0;
    for (let divider = 1; divider <= primeNumber; divider++) {
        if((primeNumber % divider) === 0) {
            count++;
        }
    }
    if(count === 2) {
        sum += primeNumber;
        numberOfIntegers++;
    }
    if (primeNumber === 500) {
        console.log(`Середнє арифметичне всіх цілих чисел від 1 до 500: ${Number((sum/numberOfIntegers).toFixed(3))}`);
    }
}

sum = 0;
for (let count = 30; count <= 80; count++) {                    //Виведення суми всіх парних чисел від 30 до 80
    if((count % 2) === 0) {
        sum += count;
    }
    if (count === 80) {
        console.log(`Сума парних чисел від 30 до 80: ${sum}`);
    }
}

str = '';
for (let count = 100; count <= 200; count++) {                    //Виведення чисел кратних 3 в діапазоні від 100 до 200
    if((count % 3) === 0) {
        if(((count + 1) === 200) || ((count + 2) === 200)) {
            str += `${count}.`;
            break;
        }
        str += `${count}, `;
    }
}
console.log(`Всі числа кратні 3 в діапазоні від 100 до 200:\n${str}`);


let number = Number(prompt('Введіть натуральне число'));
str = '';
for(let count = 1; count <= number; count++) {                     //Знаходження дільників натурального числа
    if((number % count) === 0) {
        if(count === number) {
            str += `${count}.`;
            break;
        }
        str += `${count}, `;
    }
}
console.log(`Всі дільники введеного натурального числа: ${str}`);

let numberOfEvenDivisors = 0;       //Кількість парних дільників
sum = 0;
for(let count = 1; count <= number; count++) {    //Знаходження кількості парних дільників натурального числа та їх суму
    if((number % count) === 0) {
        if((count % 2) === 0) {
            sum += count;
            numberOfEvenDivisors++;
        }
    }
}
console.log(`Кількість парних дільників введеного натурального числа: ${numberOfEvenDivisors}`);
console.log(`Сума парних дільників введеного натурального числа: ${sum}`);


str = '';
for (let firstMultiplier = 1; firstMultiplier <= 10; firstMultiplier++) {                     //Виведення таблиці множення
    for(let secondMultiplier = 1; secondMultiplier <= 10; secondMultiplier++) {
        if(secondMultiplier === 10) {
            str += `${firstMultiplier} * ${secondMultiplier} = ${firstMultiplier * secondMultiplier};`;
            console.log(`Таблиця множення на ${firstMultiplier}:\n${str}`);
            str = '';
            break;
        }
        str += `${firstMultiplier} * ${secondMultiplier} = ${firstMultiplier * secondMultiplier};\n`;
    }
}
