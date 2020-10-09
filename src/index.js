module.exports = function toReadable (number) {
    let num = "zero one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen".split(" ");
    let tens = "twenty thirty forty fifty sixty seventy eighty ninety".split(" ");

    if (number < 20) return num[number];
    let digit = number%10;
    if (number < 100) return tens[Math.floor(number / 10 - 2)] + (digit? ` ${num[digit]}`: "");
    return toReadable(Math.floor(number/100)) +" hundred" + (number%100 == 0? "": " " + toReadable(number%100));
}
// Рекурсия применяется для того чтобы узнать число после hundred (запускается еще один экземпляр который проходит по условию < 100 )
