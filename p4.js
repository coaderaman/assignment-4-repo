// problem-4---------
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

// note: This function takes a Number array and return negative number