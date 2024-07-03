var prime = [10, 8, 7, 4];

var sum = 0;
var newprime = [];
var count = 0;

for (var index in prime) {
    if (prime[index] < 2 || !isPrime(prime[index])) {
    } else {
        newprime[index] = prime[index];
        sum += prime[index];
        count++;
    }
}

if (count > 0) {
    console.log(sum / count);
} else {
    console.log("Không có số nguyên tố trong mảng");
}

function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (var i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

// var prime = [10, 8, 7, 4];

// var sum = 0;
// var newprime = [];
// var count = 0;

// for (var index in prime) {
//     if (prime < 2 || !isPrime(prime)) {
//         console.log("Không có số nguyên tố");
//     } else {
//         newprime[index] = prime[index];
//         sum += prime[index];
//         count++;
//         console.log(sum / count);
//     }
// }

// function isPrime(num) {
//     if (num <= 1) {
//         return false;
//     }
//     for (var i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) {
//             return false;
//         }
//     }
//     return true;
// }
