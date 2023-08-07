
class Employee
{
    name="";
    salary=0;
    constructor(name,salary)
    {
        this.name=name;
        this.salary=salary;
    }
    calculateAnnualSalary()
    {
        let total;
        total= this.salary=this.salary*12;
return total;
    }
}
class Manager extends Employee
{
    department="";
    constructor(name,salary,department)
    {

        super(name,salary);
        this.department=department;
    }
    calculateAnnualSalary()
    {
        let total;
        this.salary=this.salary*12;
        total = this.salary + this.salary*0.1;
        return total;
    }
}
class Engineer extends Employee
{
    department="";
    experience_years=0;
constructor(name,salary,department,experience_years)
{
    super(name,salary);
    this.department=department;
    this.experience_years=experience_years;
}
calculateAnnualSalary()
    {
        let total;
        this.salary=this.salary*12;
        total = this.salary + (parseInt(this.experience_years/5)* (this.salary*0.5));
        return total;
    }
}

let form_employee_form=document.getElementById("employeeForm");
let button_submit=document.querySelector("#employeeForm button[type='submit']");
let input_employee_name=document.getElementById("employeeName");
let input_employee_salary=document.getElementById("employeeSalary");
let select_employee_type=document.getElementById("employeeType");
let label_manager_departmentLabel=document.getElementById("managerDepartmentLabel");
let label_engineer_experienceLabel=document.getElementById("engineerExperienceLabel");
let input_manager_department=document.getElementById("managerDepartment");
let input_engineer_experience=document.getElementById("engineerExperience");
let div_results=document.getElementById("results");
let div_employee_results=document.getElementById("employeeResults");
Array.from( select_employee_type.children).forEach(function(value){
    value.addEventListener("click",function(e){
        if(e.target.value=="manager")
        {
            label_manager_departmentLabel.style.display="block";
            input_manager_department.style.display="block";
        }
        if(e.target.value=="engineer")
        {
            label_manager_departmentLabel.style.display="block";
            input_manager_department.style.display="block";
            label_engineer_experienceLabel.style.display="block";
            input_engineer_experience.style.display="block";
        }
    });
});
button_submit.addEventListener("click",function(e){
e.preventDefault();
let object_employee;

div_results.style.display="block";
let new_result=document.createElement("div");
let h1_name=document.createElement("h1");
let h1_salary=document.createElement("h1");
let h1_department=document.createElement("h1");
let h1_experience_years=document.createElement("h1");

new_result.style.backgroundColor="#22ee44";
new_result.style.margin="10px";


if(select_employee_type.value == "employee")
{
    object_employee = new Employee(input_employee_name.value, input_employee_salary.value);
    new_result.appendChild(h1_name);
new_result.appendChild(h1_salary);
}
if(select_employee_type.value == "manager")
{
    object_employee = new Manager(input_employee_name.value, input_employee_salary.value, input_manager_department.value);
    new_result.appendChild(h1_name);
    new_result.appendChild(h1_salary);
    new_result.appendChild(h1_department);
}
if(select_employee_type.value == "engineer")
{
    object_employee = new Engineer(input_employee_name.value, input_employee_salary.value, input_manager_department.value, input_engineer_experience.value);
    new_result.appendChild(h1_name);
new_result.appendChild(h1_salary);
    new_result.appendChild(h1_department);
    new_result.appendChild(h1_experience_years);
}

h1_name.textContent="Name : "+object_employee.name;
h1_salary.textContent="Salary : "+object_employee.calculateAnnualSalary();
h1_department.textContent="Department : "+object_employee.department;
h1_experience_years.textContent="Experience Years : "+object_employee.experience_years;
div_results.appendChild(new_result);
});