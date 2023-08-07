const employeeName = document.getElementById("employeeName");
const employeeSalary = document.getElementById("employeeSalary");
const employeeType = document.getElementById("employeeType");
const managerDepartment = document.getElementById("managerDepartment");
const engineerExperience = document.getElementById("engineerExperience");
const managerDepartmentLabel = document.getElementById(
  "managerDepartmentLabel"
);
const engineerExperienceLabel = document.getElementById(
  "engineerExperienceLabel"
);
const employeeForm = document.getElementById("employeeForm");
const submitButton = document.getElementById("submit");
const results = document.querySelector(".results");

////////////////////
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
    const baseSalary = super.calculateAnnualSalary();
    const bonus = baseSalary * 0.1;
    const totalSalary = Math.floor(baseSalary) + Math.floor(bonus);
    return { totalSalary, bonus };
  }
}
class Engineer extends Employee {
  constructor(name, salary, department, experienceYears) {
    super(name, salary);
    this.department = department;
    this.experienceYears = experienceYears;
  }
  calculateAnnualSalary() {
    if (this.experienceYears >= 5) {
      const baseSalary = super.calculateAnnualSalary();
      const bonus = baseSalary * 0.1;
      const totalSalary = baseSalary + Math.floor(bonus);
      return { totalSalary, bonus };
    } else {
      const baseSalary = super.calculateAnnualSalary();
      const bonus = 0;
      const totalSalary = baseSalary + Math.floor(bonus);
      return { totalSalary, bonus };
    }
  }
}

employeeType.addEventListener("change", (e) => {
  if (employeeType.value === "employee") {
    managerDepartment.style.display = "none";
    managerDepartmentLabel.style.display = "none";
    engineerExperience.style.display = "none";
    engineerExperienceLabel.style.display = "none";
    return;
  }
  if (employeeType.value === "manager") {
    managerDepartment.style.display = "block";
    managerDepartmentLabel.style.display = "block";
    engineerExperience.style.display = "none";
    engineerExperienceLabel.style.display = "none";
    return;
  }
  if (employeeType.value === "engineer") {
    managerDepartment.style.display = "block";
    managerDepartmentLabel.style.display = "block";
    engineerExperience.style.display = "block";
    engineerExperienceLabel.style.display = "block";
  }
});
submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  const mainDiv = document.createElement("div");
  const employeeAndSalaryDiv = document.createElement("div");
  const employeeDiv = document.createElement("div");
  const salaryDiv = document.createElement("div");
  const employeeImg = document.createElement("img");
  const employeeInfo = document.createElement("p");
  const salaryInfo = document.createElement("p");
  mainDiv.classList.add("employee-card");
  employeeAndSalaryDiv.classList.add("employeeAndSalaryDiv");
  salaryDiv.classList.add("salaryDiv");
  employeeDiv.classList.add("employeeDiv");
  //////////////
  if (employeeType.value === "employee") {
    const employee = new Employee(employeeName.value, employeeSalary.value);
    employeeInfo.innerHTML = `Employee Info : <br> <br>
    Name: ${employee.name}<br> <br>
    Department: ${employeeType.value} `;
    salaryInfo.innerHTML = `Salary Info : <br><br>
    Salary : ${employee.salary} $<br><br>
    Annual Salary: ${employee.calculateAnnualSalary()} $<br><br>
    Bonus: 0 $`;
    employeeImg.src = "/image/employee.png";
    employeeDiv.appendChild(employeeInfo);
    salaryDiv.appendChild(salaryInfo);
    employeeAndSalaryDiv.appendChild(employeeDiv);
    employeeAndSalaryDiv.appendChild(salaryDiv);
    mainDiv.appendChild(employeeImg);
    mainDiv.appendChild(employeeAndSalaryDiv);
    results.appendChild(mainDiv);
  }
  if (employeeType.value === "manager") {
    const manager = new Manager(
      employeeName.value,
      employeeSalary.value,
      managerDepartment.value
    );
    const { totalSalary, bonus } = manager.calculateAnnualSalary();
    console.log(manager.calculateAnnualSalary().bonus);
    employeeInfo.innerHTML = `Employee Info : <br><br> 
    Name: ${manager.name}<br> <br>
    Department: ${employeeType.value} <br><br>
    Manager of : ${manager.department}`;
    salaryInfo.innerHTML = `Salary Info : <br> <br>
    Salary : ${manager.salary} $<br> <br>
    Annual Salary: ${totalSalary} $<br><br>
    Annual Bonus: ${bonus} $`;
    employeeImg.src = "/image/manager.png";

    employeeDiv.appendChild(employeeInfo);
    salaryDiv.appendChild(salaryInfo);
    employeeAndSalaryDiv.appendChild(employeeDiv);
    employeeAndSalaryDiv.appendChild(salaryDiv);
    mainDiv.appendChild(employeeImg);
    mainDiv.appendChild(employeeAndSalaryDiv);
    results.appendChild(mainDiv);
  }
  if (employeeType.value === "engineer") {
    const engineer = new Engineer(
      employeeName.value,
      employeeSalary.value,
      managerDepartment.value,
      engineerExperience.value
    );
    const { totalSalary, bonus } = engineer.calculateAnnualSalary();
    employeeInfo.innerHTML = `Employee Info : <br> <br>
    Name: ${engineer.name}<br> <br>
    Department: ${employeeType.value} <br><br>
    Manager of: ${engineer.department}`;
    salaryInfo.innerHTML = `Salary Info : <br> <br>
    Salary : ${engineer.salary} $<br> <br>
    Annual Salary: ${totalSalary} $<br><br>
    Annual Bonus: ${bonus} $`;
    employeeImg.src = "/image/engineer.png";

    employeeDiv.appendChild(employeeInfo);
    salaryDiv.appendChild(salaryInfo);
    employeeAndSalaryDiv.appendChild(employeeDiv);
    employeeAndSalaryDiv.appendChild(salaryDiv);
    mainDiv.appendChild(employeeImg);
    mainDiv.appendChild(employeeAndSalaryDiv);
    results.appendChild(mainDiv);
  }
});
const darkModeToggle = document.getElementById("darkModeToggle");
const body = document.body;

darkModeToggle.addEventListener("click", () => {
  body.classList.toggle("dark");
  body.style.transition = "0.5s";
  
});
