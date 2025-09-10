let n = 5;

for (let i = n; i >= 1; i--) {
    let stars = "";
    for (let j = 1; j <= i; j++) {
        stars += "* ";
    }
    console.log(stars);
}


let n = 5; // Number of rows

for (let i = 0; i < n; i++) {
    let spaces = " ".repeat(n - i - 1); // Leading spaces for alignment
    let stars = "*".repeat(2 * i + 1);  // Odd number of stars (1, 3, 5, ...)
    console.log(spaces + stars);
}


let n = 5; // Number of rows
let count = 1; // Start with 1 star

for (let i = 1; i <= n; i++) {
    let stars = "*".repeat(count); // Print odd number of stars
    console.log(stars);
    count += 2; // Increase by 2 to get odd numbers (1, 3, 5, 7, 9)
}


let n = 5;

for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= n; j++) {
        if (i === 1 || i === n || j === 1 || j === n) {
            row += "* ";
        } else {
            row += "  "; // Spaces for hollow effect
        }
    }
    console.log(row);
}


let n = 5; // Size of each square

for (let i = 1; i <= n; i++) {
    let row = "";

    // First square
    for (let j = 1; j <= n; j++) {
        if (i === 1 || i === n || j === 1 || j === n) {
            row += "* ";
        } else {
            row += "  ";
        }
    }

    row += "  "; // Space between squares

    // Second square
    for (let j = 1; j <= n; j++) {
        if (i === 1 || i === n || j === 1 || j === n) {
            row += "* ";
        } else {
            row += "  ";
        }
    }

    console.log(row);
}
