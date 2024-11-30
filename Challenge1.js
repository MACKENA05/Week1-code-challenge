function studentGrade() {
    let marks = prompt("Enter student marks (0-100):");
    marks = parseFloat(marks);
    if (isNaN(marks) || marks < 0 || marks > 100) {
       alert("Invalid input. Please input a number between 0 and 100.");
       return;
    }else {
        let grade;
        if (marks > 79) {
            grade = 'A';
        } else if (marks >= 60 && marks <= 79) {
            grade = 'B';
        } else if (marks >=50 && marks <60) {
            grade = 'C';
        } else if (marks >=40 && marks < 50) {
            grade = 'D';
        } else {
            grade = 'E';
        }
        alert (`The grade for this student is ${grade}`)
    }
}
studentGrade();