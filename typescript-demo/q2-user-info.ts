// q2-user-info.ts
function getUserInfo(age: number, isActive: boolean): string {
    return `User is ${age} years old and is currently ${isActive ? "active" : "inactive"}.`;
}

// Example usage
let Age: number = 30;
let isActiveStatus: boolean = false;

console.log(getUserInfo(Age, isActiveStatus)); 
