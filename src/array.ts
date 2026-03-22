// -----------------------------
// ARRAYS IN TYPESCRIPT
// -----------------------------

// Basic array types
const chaiFlavours: string[] = ["Masala", "Ginger"];
const chaiPrice: number[] = [10, 20];

// Generic array syntax (same as number[])
const rating: Array<number> = [4.5, 5.0];

// -----------------------------
// ARRAY OF OBJECTS
// -----------------------------

type Chai = {
    name: string;
    price: number;
};

// Array of custom objects
const menu: Chai[] = [
    { name: "masala", price: 20 },
    { name: "ginger", price: 25 }
];

// -----------------------------
// READONLY ARRAYS
// -----------------------------

// Cannot modify (no push, pop, etc.)
const cities: readonly string[] = ["Hyderabad", "Gurgaon"];

// ❌ Error: Property 'push' does not exist
// cities.push("Delhi");

// -----------------------------
// MULTI-DIMENSIONAL ARRAYS
// -----------------------------

// 2D array (matrix)
const table: number[][] = [
    [1, 2, 3],
    [4, 5, 6]
];

// -----------------------------
// TUPLES (FIXED STRUCTURE)
// -----------------------------

// Tuple with fixed types and order
let chaiTuple: [string, number];
chaiTuple = ["Masala", 10];

// ❌ Invalid (wrong order/types)
// chaiTuple = [20, "Ginger"];

// Tuple with optional value
let userInfo: [string, number, boolean?];
userInfo = ["test", 1];
userInfo = ["testing", 2, true];

// Readonly tuple (immutable)
const location: readonly [number, number] = [28.66, 32.22];

// Named tuple (improves readability)
const chaiItems: [name: string, price: number] = ["Masala", 25];

// ⚠️ Important: Tuple push loophole
let t: [string, number] = ["chai", 1];

// TypeScript allows push (not strict at runtime)
// This breaks tuple safety
t.push("extra"); // ⚠️ Avoid this in real projects


// -----------------------------
// ENUMS (CONSTANT SET OF VALUES)
// -----------------------------

// Numeric enum (auto-incremented)
enum CupSize {
    SMALL,   // 0
    MEDIUM,  // 1
    LARGE    // 2
};

const size = CupSize.LARGE;


// Custom starting value
enum Status {
    PENDING = 100,
    SERVED,     // 101
    CANCELLED   // 102
};


// String enum (more readable & safer)
enum ChaiType {
    MASALA = "masala",
    GINGER = "ginger"
};

// Using enum in function
function makeChai(type: ChaiType) {
    console.log(`Making: ${type}`);
}

makeChai(ChaiType.MASALA);


// Mixed enum (not recommended)
enum RandomEnum {
    ID = 1,
    NAME = "chai"
};


// -----------------------------
// CONST ENUM (PERFORMANCE)
// -----------------------------

// Removed during compilation → faster
const enum Sugars {
    LOW = 1,
    MEDIUM = 2,
    HIGH = 3
};

// Example usage
let sugarLevel = Sugars.MEDIUM;