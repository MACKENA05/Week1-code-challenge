# Week1-code-challenge
## Salary, Speed Check, and Student Grade Calculation

#### This project consists of three different fnctions

- **`determineNetSalary()`** :
 Calculates an employee's net salary after deductions for PAYE (tax), NSSF (National Social Security Fund), and NHIF (National Hospital Insurance Fund).
- **`speedCheck()`** :
Validates a car's speed against the speed limit and calculates demerit points, or determines if the driver's license should be suspended.
- **`studentGrade()`**:
 Determines the grade of a student based on their marks.

 ## Table of Contents
1. [Features](#features)
2. [How to Use](#how-to-use)
3. [Technologies Used](#technologies-used)
4. [License](#license)

## Features

- **`determineNetSalary()`**: 
  - Prompts the user for their basic salary and benefits.
  - Calculates the gross salary, tax deductions (PAYE), NSSF, and NHIF based on salary brackets.
  - Outputs the gross salary, deductions, and the final net salary.
  
- **`speedCheck()`**: 
  - Prompts the user for the speed of their car.
  - Checks if the speed is within the legal limit.
  - Calculates demerit points for each 5 km/h over the limit and displays whether the driver's license should be suspended.
  
## How to Use
### 1. **Determine Net Salary**
   - This function prompts the user for their basic salary and benefits.
   - The system calculates the gross salary, applies tax deductions (PAYE), NHIF, and NSSF, and displays the net salary.

   Example output:

    Gross Salary: 850,000 

    Tax (PAYEE): 200,000 

    NHIF Deduction: 1000 

    NSSF Deduction: 51,000 

    Total Deductions: 251,000

    Net Salary: 599,000

### 2. **Speed Check**
- The system prompts the user for the speed of their vehicle.
- If the speed is over the legal limit (70 km/h), it calculates demerit points.
- If the demerit points exceed 12, the license is suspended.


Example output:
   
Enter the speed of the car: 90
    
     Points: 4

or if the license is suspended:

    License suspended

### 3. **Student Grade**
- This function asks the user to input the student's marks.
- It validates the marks and then assigns a grade (A, B, C, D, or E).

Example output:
Enter student marks (0-100): 85

    The grade for this student is A

## Technologies Used

- **JavaScript**: Used to create the logic for salary calculation, speed check, and grade determination.

## License

This project is open-source and available under the [MIT License](LICENSE).

---

### Additional Notes

- The code uses **`prompt()`** to collect input from the user and **`alert()`** to display results. These are simple methods ideal for testing in a browser's JavaScript console.
- The salary tax rates and NHIF contribution values are based on the current standards and may need to be updated in the future.
- I used NHIF inplace of SHIF