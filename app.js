console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
for (let x = 0; x <= 100; x++) {
    if (x%2 != 0) {
        console.log(x);
    }
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

for (let c = 1; c <= 100; c++) {
    if (c%3 === 0 && c%5 === 0) {
        console.log("FIZZBUZZ");
        break;
    } else if (c%3 === 0) {
        console.log("FIZZ");
        break;
    } else if (c%5 === 0) {
        console.log("BUZZ");
        break;
    } else {
        console.log(c);
    }
}

// Exercise 3
let a = 1;

do {
    a++;
    if (a%2 != 0) {
        console.log(a);
        break;
    } else if (a%3 === 0 && a%5 === 0) {
        console.log('FIZZBUZZ');
        break;
    } else if (a%3 === 0) {
        console.log('FIZZ');
        break;
    } else if (a%5 === 0) {
        console.log('BUZZ');
        break;
    } else {
        console.log(a);
    }

} while (a <= 100);

// Exercise 4

let value = Math.round((Math.random() * 500)); 
// creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); 
// creates a random number between 100 and 500

for (let i = 0; i <= n; i++){
    if (i = value){
        console.log("Found value!");
        break;
    } else {
        console.log("Did not find value");
    }
}

// Exercise 5

let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1); 
// creates a random number between 1 and 10
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1); 
// creates a random number between 1 and 10
let start = Math.round(Math.random() * (10 - 1) + 1); 
// creates a random number between 1 and 10
let end = Math.round(Math.random() * (1000 - 100) + 100); 
// creates a random number between 100 and 1000

for (let b = start; b <= 100; b++) {
    if (fizzDivisor === 0 && buzzDivisor === 0) {
        console.log("FIZZBUZZ");
        break;
    } else if (fizzDivisor === 0) {
        console.log("FIZZ");
        break;
    } else if (buzzDivisor === 0) {
        console.log("BUZZ");
        break;
    } else {
        console.log(b);
    }
} while (b <= end);


