// problem-5---------------------
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

const friendsGem = gemsToDiamond(2, 2, 'u');
// console.log(friendsGem);

// Note: This function takes 3 number posative paramitar