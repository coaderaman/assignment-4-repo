// problem 1-----
function mindGame(number) {
    if (isNaN(number) || number < 0) {
        return " give right number"
    }
    else {
        const multiply = number * 3;
        const add = multiply + 10;
        const divided = add / 2;
        const finalResult = divided - 5;
        return finalResult;
    }
}

const number = mindGame(5);
// console.log(number);



// problem 2-------
function evenOdd(word) {
    if (isNaN(word) === false) {
        return 'Write streng not Number'
    }
    else if (word.length % 2 === 0) {
        return 'even';
    }
    else {
        return 'odd'
    }
}
const inputWord = evenOdd();
// console.log(inputWord);


// problem 3-------
function isLGSeven(number) {
    const minus = number - 7;
    if (minus < 7) {
        return minus;
    }
    else {
        return number * 2;
    }
}
const inputNumber = isLGSeven();
// console.log(inputNumber);



// problem 4-----------
const myNumbers = [-10, 12, -53, -54, -45,];
function findBadData(numbers) {
    const badNumber = [];
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (element <= 0) {
            badNumber.push(element);
        }
    }
    return badNumber.length;
}
const badData = findBadData(myNumbers);
// console.log(badData);


// problem 5----------
function gemsToDiamond(num1, num2, num3) {
    const firstFriendDiamind = num1 * 21;
    const secondFriendDiamond = num2 * 32;
    const thirdFriendDiamind = num3 * 43;

    const totalDiamond = firstFriendDiamind + secondFriendDiamond + thirdFriendDiamind;
    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        return 'Write a valid Number'
    }
    if (totalDiamond > 1000 * 2) {
        return totalDiamond - 2000;
    }
    else {
        return totalDiamond;
    }
}
const friendsGem = gemsToDiamond(1, 1, 1);
console.log(friendsGem);
