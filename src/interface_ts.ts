// -----------------------------
// BASIC INTERFACE
// -----------------------------

// Defines structure for a chai object
interface Chai {
    flavour: string;
    price: number;
}

// Using the interface
const masala: Chai = {
    flavour: "masala",
    price: 20
};


// -----------------------------
// READONLY PROPERTY
// -----------------------------

interface Shop {
    readonly id: number; // cannot be changed after initialization
    name: string;
}

const s: Shop = { id: 1, name: "chai code" };

// ❌ Error: Cannot assign to 'id'
// s.id = 2;


// -----------------------------
// FUNCTION TYPE WITH INTERFACE
// -----------------------------

// Interface describing a function signature
interface DiscountCalculator {
    (price: number): number;
}

// Function must match the signature
const apply: DiscountCalculator = (p) => p * 0.5;


// -----------------------------
// INTERFACE WITH METHODS
// -----------------------------

interface TeaMachine {
    start(): void;
    stop(): void;
}

// Object implementing interface methods
const machine: TeaMachine = {
    start() {
        console.log("start");
    },
    stop() {
        console.log("stop");
    }
};


// -----------------------------
// INDEX SIGNATURE
// -----------------------------

// Allows dynamic keys with fixed value type
interface ChaiRatings {
    [flavour: string]: number;
}

const ratings: ChaiRatings = {
    masala: 4.5,
    ginger: 5.0
};


// -----------------------------
// INTERFACE MERGING (IMPORTANT)
// -----------------------------

// Same interface declared multiple times → merged automatically
interface User {
    name: string;
}

interface User {
    age: number;
}

// Final structure = { name: string; age: number }
const u: User = {
    name: "test",
    age: 20
};


// -----------------------------
// INTERFACE EXTENSION
// -----------------------------

interface A {
    a: string;
}

interface B {
    b: string;
}

// C inherits properties from both A and B
interface C extends A, B {}

// Example usage
const obj: C = {
    a: "hello",
    b: "world"
};