var integer = [2, 3, 6, 9];

var max = integer[0];
var indexmax = 0;

for (var index in integer) {
    if (integer[index] >= max) {
        max = integer[index];
        indexmax = index;
    }
}

console.log(max);
console.log(indexmax);
