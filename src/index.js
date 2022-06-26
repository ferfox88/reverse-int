module.exports = function reverse(n) {
    let str = (Math.abs(n)).toString();
    let num = '';
    for (let i = str.length - 1; i >= 0; i--) {
        num = num + str[i];
    }
    return Number(num);
}