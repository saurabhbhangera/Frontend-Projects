function Logger(constructor: Function) {
    console.log(`Class ${constructor.name} has been instantiated.`);
}

@Logger
class User {
    constructor(public name: string) {
        console.log(`User ${name} created.`);
    }
}

// Instantiating the class
const user1 = new User("Saurabh");