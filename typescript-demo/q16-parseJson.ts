function parseJson(jsonString: string): any | null {
    try {
        return JSON.parse(jsonString);
    } catch (error: unknown) { 
        if (error instanceof Error) { 
            console.error("❌ Error: Invalid JSON format", error.message);
        } else {
            console.error("❌ Unknown error occurred");
        }
        return null;
    }
}


const validJson = '{"name": "John", "age": 30}';
console.log("Parsed JSON:", parseJson(validJson));


const invalidJson = '{"name": "John", "age": 30'; 
console.log("Parsed JSON:", parseJson(invalidJson));
