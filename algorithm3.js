//Assignment: Print Sum of all odd numbers from 1 to 5000
sum = 0;
for (var i = 0; i <= 5000; i++) {
    if (i % 2 != 0) {
        sum += i;
        console.log(sum);
    }
}