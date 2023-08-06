# Employee, Manager, and Engineer Classes - JavaScript Task

In this task, you will be implementing JavaScript classes to represent different roles in a company: 'Employee', 'Manager', and 'Engineer'. Each class will have specific properties and methods to model their respective roles.

## Employee Class

The 'Employee' class will have the following properties:
- `name`: representing the name of the employee.
- `salary`: representing the monthly salary of the employee.

The 'Employee' class will also include the following method:
- `calculateAnnualSalary()`: This method will calculate the annual salary of the employee by multiplying the monthly salary by 12.

## Manager Class

The 'Manager' class will inherit from the 'Employee' class, meaning it will have all the properties and methods of the 'Employee' class. Additionally, it will have the following extra property:
- `department`: representing the department managed by the manager.

The 'Manager' class will override the `calculateAnnualSalary()` method to include manager-specific bonuses. Managers will receive a 10% bonus on their annual salary.

## Engineer Class

The 'Engineer' class will also inherit from the 'Employee' class and will have the following extra property:
- `experienceYears`: representing the number of years of experience the engineer has.

The 'Engineer' class will override the `calculateAnnualSalary()` method to include experience-based bonuses. Engineers will receive a 5% bonus for every 5 years of experience.

### Task Steps

1. Create the 'Employee' class with properties for **name** and **salary**, and implement the `calculateAnnualSalary()` method.
2. Create the 'Manager' class as a subclass of 'Employee' with an additional property for the **department**, and override the `calculateAnnualSalary()` method to include manager-specific bonuses.
3. Create the 'Engineer' class as a subclass of 'Employee' with an additional property for **experience** years, and override the `calculateAnnualSalary()` method to include experience-based bonuses.
4. Create two instances of the 'Manager' class, providing their names, salaries, and departments. Calculate and display their annual salaries, taking into account the bonuses for managers.
5. Create an instance of the 'Engineer' class, providing their name, salary, and experience years. Calculate and display their annual salary, taking into account the experience-based bonuses.

### Desired Outcome




By completing this task, you will gain a better understanding of class inheritance, method overriding, and polymorphism in JavaScript. You will learn how to create and work with different classes and subclasses to model real-world scenarios, where different roles may have distinct behaviors and properties.

Happy coding!
