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

// note: this function takes a number paramiter