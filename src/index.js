module.exports = function reverse(n) {
    let reverseNum = '';

    if (n < 0) {
        n *= (-1);
    };

    while (n > 0) {
        let remainder = n % 10;
        reverseNum += remainder;
        n = parseInt(n / 10);
    }

    return reverseNum;
}