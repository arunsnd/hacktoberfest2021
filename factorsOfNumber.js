
const num = prompt('Enter a positive number: ');

console.log(`The factors of ${num} is:`);

for(let i = 1; i <= num; i++) {

    // check if number is a factor
    if(num % i == 0) {
        console.log(i);
    }
}
