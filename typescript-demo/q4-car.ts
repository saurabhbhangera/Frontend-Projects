interface Vehicle {
    startEngine(): string;
}


class Car implements Vehicle {
    make: string;
    model: string;
    year: number;

    constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    startEngine(): string {
        return `The ${this.year} ${this.make} ${this.model}'s engine has started.`;
    }
}

const myCar = new Car("Toyota", "Corolla", 2023);
console.log(myCar.startEngine()); 
