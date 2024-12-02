// Importing the readline module
const readline = require('readline');

// Create a readline interface for taking input and giving output
const rl = readline.createInterface({
    input: process.stdin,  // Read from standard input/terminal (keyboard)
    output: process.stdout // Output to standard output/terminal (console)
});

// Function to check the speed and calculate demerit points or license suspension
function speedCheck(speed) {
    const speedLimit = 70;

    // Check if the input is a valid number
    if (isNaN(speed)) {
        console.log("Please enter a valid number.");
        return;
    }

    // Check if the speed is within the speed limit
    if (speed <= speedLimit) {
        console.log("OK");
    } else {
        // Calculate the demerit points (1 point for every 5 km/h over the speed limit)
        const demeritPoints = Math.floor((speed - speedLimit) / 5);

        // If the demerit points are greater than 12, suspend the license
        if (demeritPoints > 12) {
            console.log("License suspended");
        } else {
            // Otherwise, display the number of demerit points
            console.log("Points: " + demeritPoints);
        }
    }
}

// Prompt the user to enter the speed of the car and process the input
rl.question("Enter the speed of the car: ", (answer) => {

    // Convert the answer to an integer (number)
    const speed = parseInt(answer, 10);

    // Call the speedCheck function with the user's input
    speedCheck(speed);

    // Close the readline interface
    rl.close();
});

