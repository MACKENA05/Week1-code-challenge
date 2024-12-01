function determineNetSalary() {
    // Prompt the user for basic salary and benefits
    let basicSalary = parseFloat(prompt("Enter your basic salary."));
    let benefits = parseFloat(prompt("Enter your benefits"));

    // Validate the inputs
    if (isNaN(basicSalary) || isNaN(benefits) || basicSalary < 0 || benefits < 0) {
        alert("Invalid input, please enter valid numbers for basic salary and benefits.");
        return;
    }

    // Calculate gross Salary
    let grossSalary = basicSalary + benefits;

    // Calculate PAYE using the tax brackets
    let tax = 0;
    if (basicSalary > 800000) {
        tax = basicSalary * 0.35; // 35% on salary above 800,000
    }
     else if (basicSalary > 500000 && basicSalary <= 800000) {
        tax = basicSalary * 0.325; // 32.5% on salary between 500,001 and 800,000
    } 
    else if (basicSalary > 32333 && basicSalary <= 500000) {
        tax = basicSalary * 0.3; // 30% on salary between 32,334 and 500,000
    } 
    else if (basicSalary > 24000 && basicSalary <= 32333) {
        tax = basicSalary * 0.25; // 25% on salary between 24,001 and 32,334
    }
     else {
        tax = basicSalary * 0.10; // 10% on salary below 24,000
    }

    // Calculate NSSF (6% contribution)
    let nssfDeduction = basicSalary * 0.06;

    // Calculate NHIF based on salary brackets
    let nhifDeduction;
    switch (true) {
        case (basicSalary <= 5999):
            nhifDeduction = 150;
            break;
        case (basicSalary >= 6000 && basicSalary <= 7999):
            nhifDeduction = 300;
            break;
        case (basicSalary >= 8000 && basicSalary <= 11999):
            nhifDeduction = 400;
            break;
        case (basicSalary >= 12000 && basicSalary <= 14999):
            nhifDeduction = 500;
            break;
        case (basicSalary >= 15000 && basicSalary <= 19999):
            nhifDeduction = 600;
            break;
        case (basicSalary >= 20000 && basicSalary <= 24999):
            nhifDeduction = 750;
            break;
        case (basicSalary >= 25000 && basicSalary <= 29999):
            nhifDeduction = 850;
            break;
        case (basicSalary >= 30000 && basicSalary <= 34999):
            nhifDeduction = 900;
            break;
        case (basicSalary >= 35000 && basicSalary <= 39999):
            nhifDeduction = 950;
            break;
        case (basicSalary >= 40000 && basicSalary <= 44999):
            nhifDeduction = 1000;
            break;
        case (basicSalary >= 45000 && basicSalary <= 49999):
            nhifDeduction = 1100;
            break;
        case (basicSalary >= 50000 && basicSalary <= 59999):
            nhifDeduction = 1200;
            break;
        case (basicSalary >= 60000 && basicSalary <= 69999):
            nhifDeduction = 1300;
            break;
        case (basicSalary >= 70000 && basicSalary <= 79999):
            nhifDeduction = 1400;
            break;
        case (basicSalary >= 80000 && basicSalary <= 89999):
            nhifDeduction = 1500;
            break;
        case (basicSalary >= 90000 && basicSalary <= 99999):
            nhifDeduction = 1600;
            break;
        case (basicSalary >= 100000):
            nhifDeduction = 1700;
            break;
        default:
            alert("Salary out of range.");
            return;
    }

    // Calculate the net salary
    let totalDeduction = tax + nssfDeduction + nhifDeduction;
    let netSalary = grossSalary - totalDeduction;

    // Displaying the result
    alert("Gross Salary: " + grossSalary.toFixed(2) +
        "\nTax (PAYEE): " + tax.toFixed(2) +
        "\nNHIF Deduction: " + nhifDeduction.toFixed(2) +
        "\nNSSF Deduction: " + nssfDeduction.toFixed(2) +
        "\nTotal Deductions: " + totalDeduction.toFixed(2) +
        "\nNet Salary: " + netSalary.toFixed(2));
}

// Calling the function
determineNetSalary();