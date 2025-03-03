var Employee = /** @class */ (function () {
    function Employee(name, age, employeeId) {
        this.name = name;
        this.age = age;
        this.employeeId = employeeId;
    }
    Employee.prototype.getEmployeeDetails = function () {
        return "Employee Details: Name: ".concat(this.name, ", Age: ").concat(this.age, ", Employee ID: ").concat(this.employeeId);
    };
    return Employee;
}());
var emp1 = new Employee("John Doe", 30, 101);
console.log(emp1.getEmployeeDetails());
