var Car = /** @class */ (function () {
    function Car(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    Car.prototype.startEngine = function () {
        return "The ".concat(this.year, " ").concat(this.make, " ").concat(this.model, "'s engine has started.");
    };
    return Car;
}());
var myCar = new Car("Toyota", "Corolla", 2023);
console.log(myCar.startEngine());
