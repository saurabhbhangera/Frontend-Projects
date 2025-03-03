function parseJson(jsonString) {
    try {
        return JSON.parse(jsonString);
    }
    catch (error) {
        if (error instanceof Error) {
            console.error("❌ Error: Invalid JSON format", error.message);
        }
        else {
            console.error("❌ Unknown error occurred");
        }
        return null;
    }
}
var validJson = '{"name": "John", "age": 30}';
console.log("Parsed JSON:", parseJson(validJson));
var invalidJson = '{"name": "John", "age": 30';
console.log("Parsed JSON:", parseJson(invalidJson));
