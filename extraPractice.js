//a function that takes an array of numbers as input. It should output an array of those same numbers sorted from lowest to highest.

function sortNumbers(list) {
    return list.sort((a, b) =>a-b)
}
let input = [5, 6, 1, 3, 4, 2];
let output = sortNumbers(input);
console.log(output);

//Create a function that takes an integer and console logs a step shaped stair with the integer levels using the # character 

function printStairsCase(n) {
    for (let i = 1 ; i <= n; i++) {
        console.log('#'.repeat(i));
    }
}

//Testing the function
printStairsCase(5)


