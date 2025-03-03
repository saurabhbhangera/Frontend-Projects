function divideNumbers(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    return a / b;
}
try {
    console.log("Result:", divideNumbers(10, 2));
    console.log("Result:", divideNumbers(5, 0));
}
catch (error) {
    if (error instanceof Error) {
        console.error("❌ Error:", error.message);
    }
    else {
        console.error("❌ Unknown error occurred");
    }
}
