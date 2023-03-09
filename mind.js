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

// note: This function takes a number paramiter