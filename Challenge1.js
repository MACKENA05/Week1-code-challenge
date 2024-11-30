function studentGrade() {
    // Ask the user to enter marks, which should be between 0 and 100
    let marks = prompt("Enter student marks (0-100):");

    // Convert the input string to a floating-point number for comparison
    marks = parseFloat(marks);

    // Validate the input to ensure it's a valid number between 0 and 100 and used return to exit the function early if the input is invalid
    if (isNaN(marks) || marks < 0 || marks > 100) {
        alert("Invalid input. Please input a number between 0 and 100.");
        return;  
    }

    // Variable to store the grade based on the marks
    let grade;

    // Use a switch statement to determine the grade based on the marks
    switch (true) {
        case (marks > 79):
            grade = 'A';
            break;
        case (marks >= 60 && marks <= 79):
            grade = 'B';
            break;
        case (marks >= 50 && marks < 60):
            grade = 'C';
            break;
        case (marks >= 40 && marks < 50):
            grade = 'D';
            break;
        default:
            grade = 'E';
    }

    // Display the final grade to the user using an alert
    alert(`The grade for this student is ${grade}`);
}

// Call the function to prompt the user and calculate the grade
studentGrade();