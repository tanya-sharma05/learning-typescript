// -----------------------------
// GENERIC FUNCTION (BASIC)
// -----------------------------

// Generic function → works with any type T
function wrapInArray<T>(item: T): T[] {
    return [item];
}

// Type is inferred automatically
wrapInArray("masala");              // string[]
wrapInArray(23);                   // number[]
wrapInArray({ flavour: "ginger" }); // { flavour: string }[]


// -----------------------------
// MULTIPLE GENERICS
// -----------------------------

// Function with two generic types A and B
function pair<A, B>(a: A, b: B): [A, B] {
    return [a, b];
}

// Different combinations
pair("masala", 20);   // [string, number]
pair({}, 35);         // [{}, number]


// -----------------------------
// GENERIC INTERFACE
// -----------------------------

// Generic interface → reusable container
interface Box<T> {
    content: T;
}

// Using Box with different types
const numberBox: Box<number> = { content: 18 };
const stringBox: Box<string> = { content: "19" };


// -----------------------------
// GENERIC API RESPONSE (IMPROVED)
// -----------------------------

// Generic API response structure
interface ApiResponse<T> {
    status: number;
    data: T;
}

// Define a specific data shape
type Chai = {
    flavour: string;
};

// Using generic API response
const chaiResponse: ApiResponse<Chai> = {
    status: 200,
    data: { flavour: "masala" }
};


// -----------------------------
// WHY GENERICS? (KEY IDEA)
// -----------------------------

// Without generics → you would need multiple versions:
// BoxNumber, BoxString, BoxObject ❌

// With generics → one reusable structure ✅
// Box<T>