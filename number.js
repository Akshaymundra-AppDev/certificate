let n = 5; // Number of rows

for (let i = n; i >= 1; i--) {
    let pattern = "";
    for (let j = 1; j <= i; j++) {
        pattern += (j % 2) + " "; // Alternating between 1 and 0
    }
    console.log(pattern);
}
