function printDetails(param: string | number): void {
    console.log(`Type: ${typeof param}, Value: ${param}`);
}

printDetails("Hello");  
printDetails(100);      