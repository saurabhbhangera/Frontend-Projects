// q2-user-info.ts
function getUserInfo(age, isActive) {
    return "User is ".concat(age, " years old and is currently ").concat(isActive ? "active" : "inactive", ".");
}
// Example usage
var Age = 30;
var isActiveStatus = false;
console.log(getUserInfo(Age, isActiveStatus));
