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

// note: This function takes a string paramitar and return those word number's even or odd