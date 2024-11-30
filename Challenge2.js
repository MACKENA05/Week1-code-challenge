// Function to check the speed and determine demerit points or license suspension
function speedCheck(speed) {
    // Validate if the input speed is a valid number use return to  exit the function if input is invalid
    if (isNaN(speed)) {
        alert("Please enter a valid number.");  // Show an alert if the input is not a valid number
        return; 
    }

    // Defining the speed limit
    const speedLimit = 70;

    // Check if the speed is within the speed limit
    if (speed <= speedLimit) {
        alert("OK");
    } else {
        // Calculate the number of demerit points for every 5 km/h over the limit
        const demeritPoints = Math.floor((speed - speedLimit) / 5);

        // Check if the demerit points exceed 12, which leads to license suspension
        if (demeritPoints > 12) {
            alert("License suspended");  // License suspension message
        } else {
            // Otherwise, show the number of demerit points
            alert("Points: " + demeritPoints);
        }
    }
}

// Prompt the user to enter the speed of the car and convert it to an integer
const speed = parseInt(prompt("Enter the speed of the car: "), 10);

// Call the speedCheck function with the entered speed
speedCheck(speed);
