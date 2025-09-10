function factorial(n) {
    let result = 1;
    let i = 1;

    do {
        result *= i;
        i++;
    } while (i <= n);

    return result;
}

// Example usage
const number = prompt("Enter a number to calculate its factorial:");
const fact = factorial(number);
console.log(`The factorial of ${number} is ${fact}`);
