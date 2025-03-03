interface Person {
    name: string;
    age: number;
}

class Employee implements Person {
    name: string;
    age: number;
    employeeId: number;

    constructor(name: string, age: number, employeeId: number) {
        this.name = name;
        this.age = age;
        this.employeeId = employeeId;
    }

    getEmployeeDetails(): string {
        return `Employee Details: Name: ${this.name}, Age: ${this.age}, Employee ID: ${this.employeeId}`;
    }
}

const emp1 = new Employee("John Doe", 30, 101);
console.log(emp1.getEmployeeDetails()); 
