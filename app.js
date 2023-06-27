console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
for (let i = 1; i <= 100; i++) {
    if (i%2 != 0) {
        console.log(i);
    }
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i, "FIZZBUZZ");
        
    } else if (i % 3 === 0) {
        console.log(i, "FIZZ");
        
    } else if (i % 5 === 0) {
        console.log(i, "BUZZ");
        
    } 
}

// Exercise 3
let a = 1;

do {
    a++;
    if (a%2 != 0) {
        console.log(a);
        break;
    }
} while (a <= 100);

a = 1;
do{
    if (a%3 === 0 && a%5 === 0) {
        console.log(a, 'FIZZBUZZ');       
    } else if (a%3 === 0) {
        console.log(a, 'FIZZ');        
    } else if (a%5 === 0) {
        console.log(a, 'BUZZ');        
    } else {
        console.log(a);
    }

} while (a <= 100);

// Exercise 4

let value = Math.round((Math.random() * 500)); 
// creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); 
// creates a random number between 100 and 500
let foundValue = false;
for (let i = 0; i <= n; i++){
    if (i === value){
        foundValue = true;
        console.log("Found value!");
        break;
    } 
}
if (!foundValue){
    console.log("Did not find value");
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


for (let b = start; b <= end; b++) {
        if (b % fizzDivisor === 0 && b % buzzDivisor === 0) {
            console.log(b, "FIZZBUZZ");            
        } else if (b % fizzDivisor === 0) {
            console.log(b, "FIZZ");            
        } else if (b % buzzDivisor === 0) {
            console.log(b, "BUZZ");            
        } else {
            console.log(b);
        }
} 


console.log(fizzDivisor, buzzDivisor);
