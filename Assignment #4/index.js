// 1. Even or Odd Checker
function evenOrOdd(n) {
    if (n % 2 == 0) {
        console.log(n + " is Even");
    }
    else {
        console.log(n + " is Odd");
    }
}
console.log("--Question #1--")
evenOrOdd(6); evenOrOdd(5);

// 2. Multiplication Table Generator (Using Loops)
function multiplicationTable(n) {
    for (i = 1; i <= 10; i++) {
        mul = n * i;
        console.log(n + " x " + i + " = " + mul);
    }
}
console.log("--Question #2--")
multiplicationTable(5)

// 3. FizzBuzz Challenge
function fizzBuzz() {
    for (i = 1; i <= 20; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log("FizzBuzz")
        }
        else if (i % 3 == 0) {
            console.log("Fizz")
        }
        else if (i % 5 == 0) {
            console.log("Buzz")
        }
        else {
            console.log(i)
        }
    }
}
console.log("--Question #3--")
fizzBuzz()

// 4. Square Pattern
function squarePattern(n) {
    for (let i = 1; i <= n; i++) {
        let row = "";
        for (let j = 1; j <= n; j++) {
            row += "*";
        }
        console.log(row);
    }
}
console.log("--Question #4--")
squarePattern(5);

// 5. Right-Angled Triangle
function rightAngledTriangle(n){
    for (i=1; i<=n; i++){
        let row = "";
        for(j=1; j<=i; j++){
            row += "*";
        }
        console.log(row)
    }
}
console.log("--Question #5--")
rightAngledTriangle(5)