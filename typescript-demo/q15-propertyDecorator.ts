function IsValidEmail(target: any, propertyKey: string) {
    let value: string;

    const getter = () => value;
    const setter = (newEmail: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(newEmail)) {
            throw new Error(`Invalid email format: ${newEmail}`);
        }
        value = newEmail;
    };

    Object.defineProperty(target, propertyKey, {
        get: getter,
        set: setter,
        enumerable: true,
        configurable: true
    });
}

class User {
    @IsValidEmail
    public email: string;

    constructor(email: string) {
        this.email = email;
    }
}

try {
    const user1 = new User("valid.email@example.com");
    console.log("User created:", user1.email);

    // Uncomment this to see the error
    // const user2 = new User("invalid-email");
} catch (error) {
    console.error(error.message);
}