var numbers = [4, 4, 4, 5, 6, 6, 7];
var newNumbers = [];

for (var index in numbers) {
    var currentNumber = numbers[index];
    var isSame = false;

    for (var j = 0; j < newNumbers.length; j++) {
        if (newNumbers[j] === currentNumber) {
            isSame = true;
            break;
        }
    }

    if (!isSame) {
        newNumbers[newNumbers.length] = currentNumber;
    }
}

console.log(newNumbers);
