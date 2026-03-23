import axios, { type AxiosResponse } from "axios";

// -----------------------------
// INTERFACE FOR API DATA
// -----------------------------

// Represents structure of Todo item from API
interface Todo {
    userId: number;     // ID of the user (fixed typo from userdId)
    id: number;         // Todo ID
    title: string;      // Todo title
    completed: boolean; // Status of completion
}


// -----------------------------
// FETCH DATA USING AXIOS
// -----------------------------

// Async function to fetch data using axios
const fetchData = async () => {
    try {
        // AxiosResponse<Todo> ensures proper typing of response
        const response: AxiosResponse<Todo> = await axios.get(
            "https://jsonplaceholder.typicode.com/todos/1"
        );

        // Access typed data safely
        console.log("Todo:", response.data);

    } catch (error: unknown) {

        // Axios-specific error handling
        if (axios.isAxiosError(error)) {
            console.log("Axios error:", error.message);

            // Optional chaining for safe access
            console.log("Status:", error.response?.status);
        }

        // Fallback error logging
        console.log("Unexpected error:", error);
    }
};