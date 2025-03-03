function identity<T>(arg: T): T {
    return arg;
}

console.log(identity<string>("Hello, TypeScript!"));  
console.log(identity<number>(42));                   
console.log(identity<boolean>(true));                
