interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}


// -----------------------------
// FETCH DATA USING FETCH API
// -----------------------------

const fetchData = async () => {
    try {
        // Make API request
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/todos/1"
        );

        // Check if response is successful
        if (!response.ok) {
            throw new Error(`HTTP error ${response.status}`);
        }

        // Parse JSON response
        const data: Todo = await response.json();

        console.log("Todo:", data);

    } catch (error: unknown) {

        // Proper error handling in TypeScript
        if (error instanceof Error) {
            console.log("Error:", error.message);
        } else {
            console.log("Unknown error:", error);
        }
    }
};