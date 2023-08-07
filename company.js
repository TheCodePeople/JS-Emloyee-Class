const employeeName = document.getElementById('employeeName');
const employeeSalary = document.getElementById('employeeSalary');
const employeeType = document.getElementById('employeeType');
const managerDepartment = document.getElementById('managerDepartment');
const engineerExperience = document.getElementById('engineerExperience');
const managerDepartmentLabel = document.getElementById('managerDepartmentLabel');
const engineerExperienceLabel = document.getElementById('engineerExperienceLabel');
const employeeForm = document.getElementById('employeeForm');
const employeeResults = document.getElementById('employeeResults');
const submitButton = document.querySelector('button[type="submit"]');

console.log(managerTableBody);

employeeType.addEventListener('change', () => {
    if (employeeType.value === 'manager') {
        managerDepartmentLabel.style.display = 'block';
        managerDepartment.style.display = 'block';
        engineerExperienceLabel.style.display = 'none';
        engineerExperience.style.display = 'none';
    } else if (employeeType.value === 'engineer') {
        managerDepartmentLabel.style.display = 'none';
        managerDepartment.style.display = 'none';
        engineerExperienceLabel.style.display = 'block';
        engineerExperience.style.display = 'block';
    } else {
        managerDepartmentLabel.style.display = 'none';
        managerDepartment.style.display = 'none';
        engineerExperienceLabel.style.display = 'none';
        engineerExperience.style.display = 'none';
    }
});



submitButton.addEventListener('click', (event) => {
    event.preventDefault();
    let employee;

    if (employeeType.value === 'manager') {
        employee = new Manager(employeeName.value, parseInt(employeeSalary.value), managerDepartment.value);
    } else if (employeeType.value === 'engineer') {
        employee = new Engineer(employeeName.value, parseInt(employeeSalary.value), parseInt(engineerExperience.value));
    } else {
        employee = new Employee(employeeName.value, parseInt(employeeSalary.value));
    }

    const annualSalary = employee.calculateAnnualSalary();
    const resultText = `Employee Name: ${employee.name}, Annual Salary: $${annualSalary.toFixed(2)}`;

    if (employee instanceof Manager) {
        const managerTableRow = createTableRow(employee.name, `$${annualSalary.toFixed(2)}`, employee.department);
        document.getElementById('managerTableBody').appendChild(managerTableRow);
    } else if (employee instanceof Engineer) {
        const engineerTableRow = createTableRow(employee.name, `$${annualSalary.toFixed(2)}`, employee.experienceYears);
        document.getElementById('engineerTableBody').appendChild(engineerTableRow);
    } else {
        const employeeTableRow = createTableRow(employee.name, `$${annualSalary.toFixed(2)}`);
        document.getElementById('employeeTableBody').appendChild(employeeTableRow);
    }

    employeeName.value = '';
    employeeSalary.value = '';
    managerDepartment.value = '';
    engineerExperience.value = '';
});

function createTableRow(name, salary, extraData) {
    const tableRow = document.createElement('tr');

    const nameCell = document.createElement('td');
    nameCell.textContent = name;
    tableRow.appendChild(nameCell);

    const salaryCell = document.createElement('td');
    salaryCell.textContent = salary;
    tableRow.appendChild(salaryCell);

    if (extraData) {
        const extraDataCell = document.createElement('td');
        extraDataCell.textContent = extraData;
        tableRow.appendChild(extraDataCell);
    }

    return tableRow;
}



class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }

    calculateAnnualSalary() {
        return this.salary * 12;
    }
}

class Manager extends Employee {
    constructor(name, salary, department) {
        super(name, salary);
        this.department = department;
    }

    calculateAnnualSalary() {
        return super.calculateAnnualSalary() * 1.1;
    }
}

class Engineer extends Employee {
    constructor(name, salary, experienceYears) {
        super(name, salary);
        this.experienceYears = experienceYears;
    }

    calculateAnnualSalary() {
        return super.calculateAnnualSalary() * (1 + this.experienceYears / 20);
    }
}


