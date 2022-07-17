let a = prompt("What is your number?", "Number");
//fizzBuzz
function fizzBuzz(a) {  
 
    let multipleOfThree = (a) => ((a % 3) === 0);
    let multipleOfFive = (a) => ((a % 5) === 0);

    return (
       (multipleOfThree(a) && multipleOfFive(a)) ? "FizzBuzz"
     : (multipleOfFive(a)) ? "Buzz"
     : (multipleOfThree(a)) ? "Fizz"
     : a
    )
}

for (i = 1; i <= a; i++) {
    fizzBuzz(i);
    console.log(fizzBuzz(i));
}