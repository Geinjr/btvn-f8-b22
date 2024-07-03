var numbers = [5, 9, 8, 1, 10, 7];
var element = 4;
var temp;

var increase = function () {
    for (var index = 0; index < numbers.length; index++) {
        if (numbers[index] > numbers[index + 1]) {
            temp = numbers[index];
            numbers[index] = numbers[index + 1];
            numbers[index + 1] = temp;
        }
    }
};

increase();

if ((numbers[numbers.length] = element)) {
    for (var value of numbers) {
        increase();
    }
}

console.log(numbers);
