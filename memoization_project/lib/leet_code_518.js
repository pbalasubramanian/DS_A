// Work through this problem on https://leetcode.com/problems/coin-change-2/ and use the specs given there.
// Feel free to use this file for scratch work.

var change = function (amount, coins) {

    if (amount === 0) return 0;

    let numCoins = [];
    coins.forEach(coin => {
        if( coin <= amount) {
            numCoins.push(change(amount - coin, coins) + 1);
        }
    })

    return numCoins.length;

};

let amount = 5, coins = [1, 2, 5];

console.log(change(amount, coins));

amount = 3, coins = [2]

console.log(change(amount, coins));

amount = 10, coins = [10]

console.log(change(amount, coins));