// -----------------------------
// BASIC TYPE DEFINITION
// -----------------------------

// Defines the structure of a chai order
type Chai = {
    type: string;      // type of chai (e.g., masala, ginger)
    sugar: number;     // sugar level
    strong: boolean;   // whether chai is strong or not
};

// Function to prepare chai
function makeChai(order: Chai) {
    console.log("Making chai:", order);
}

// Function to serve chai
function serveChai(order: Chai) {
    console.log("Serving chai:", order);
}


// -----------------------------
// IMPLEMENTING TYPES IN CLASSES
// -----------------------------

// A basic recipe structure
type TeaRecipe = {
    water: number;
    milk: number;
};

// Class implementing TeaRecipe
class MasalaChai implements TeaRecipe {
    water = 100;
    milk = 50;
}


// -----------------------------
// INTERFACES WITH CLASSES
// -----------------------------

// Defines allowed cup sizes
interface CupSize {
    size: "small" | "large";
}

// Class implementing interface
class Cup implements CupSize {
    size: "small" | "large" = "large";
}


// -----------------------------
// UNION TYPES
// -----------------------------

// Only these tea types are allowed
type TeaType = "masala" | "ginger" | "elaichi";

// Function using union type
function orderChai(t: TeaType) {
    console.log("Order received for:", t);
}


// -----------------------------
// INTERSECTION TYPES
// -----------------------------

// Base properties
type BaseChai = {
    teaLeaves: number;
};

// Extra properties
type Extra = {
    masala: number;
};

// Combine both types using intersection (&)
type MasalaMix = BaseChai & Extra;

// Object must include ALL properties from both types
const cup: MasalaMix = {
    teaLeaves: 2,
    masala: 1
};


// -----------------------------
// OPTIONAL PROPERTIES
// -----------------------------

type User = {
    username: string;
    bio?: string; // optional property
};

// Valid: bio not required
const u1: User = {
    username: "Test"
};

// Valid: bio provided
const u2: User = {
    username: "Test",
    bio: "Test.ai"
};


// -----------------------------
// READONLY PROPERTIES
// -----------------------------

type Config = {
    readonly appName: string; // cannot be changed after initialization
    version: number;
};

const cfg: Config = {
    appName: "Testing",
    version: 1
};

// ❌ This would cause an error:
// cfg.appName = "NewApp";  // Cannot assign to 'appName' because it is readonly