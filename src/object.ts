// -----------------------------
// BASIC OBJECT vs TYPE SAFETY
// -----------------------------

// Simple object (TypeScript infers the type automatically)
const chai = {
    name: "Masala chai",
    price: 20,
    isHot: true
};

// Explicit type annotation for better control
let tea: {
    name: string;
    price: number;
    isHot: boolean;
};

tea = {
    name: "Ginger tea",
    price: 25,
    isHot: true
};


// -----------------------------
// CUSTOM TYPE (REUSABILITY)
// -----------------------------

// Define reusable structure
type Tea = {
    name: string;
    price: number;
    ingredients: string[];
};

// Using custom type
const adrakChai: Tea = {
    name: "Adrak chai",
    price: 25,
    ingredients: ["ginger", "water", "tea leaves"]
};


// -----------------------------
// STRUCTURAL TYPING (IMPORTANT)
// -----------------------------

// Type only checks required properties
type Cup = {
    size: string;
};

let smallCup: Cup = {
    size: "200ml"
};

// Extra properties allowed in variable (not direct assignment)
let bigCup = {
    size: "500ml",
    material: "steel"
};

// ✅ Allowed because required property (size) exists
smallCup = bigCup;


// -----------------------------
// EXTRA PROPERTIES COMPATIBILITY
// -----------------------------

type Brew = {
    brewTime: number;
};

const coffee = {
    brewTime: 5,
    beans: "Arabica"
};

// ✅ Allowed: extra properties are ignored
const chaiBrew: Brew = coffee;


// -----------------------------
// BASIC USER TYPE
// -----------------------------

type User = {
    username: string;
    password: string;
};

const u: User = {
    username: "chaicode",
    password: "1234"
};


// -----------------------------
// NESTED TYPES (REAL-WORLD STRUCTURE)
// -----------------------------

type Item = {
    name: string;
    quantity: number;
};

type Address = {
    street: string;
    pin: number;
};

type Order = {
    id: string;
    items: Item[];
    address: Address;
};


// -----------------------------
// UTILITY TYPES - PARTIAL
// -----------------------------

// Makes all properties optional
type Chai1 = {
    name: string;
    price: number;
    isHot: boolean;
};

const updateChai = (updates: Partial<Chai1>) => {
    console.log("Updating chai with", updates);
};

// You can update only some fields
updateChai({ price: 30 });
updateChai({ isHot: false });
updateChai({}); // valid


// -----------------------------
// UTILITY TYPES - REQUIRED
// -----------------------------

// Makes all optional properties required
type Chai2 = {
    name?: string;
    quantity?: number;
};

const placeOrder = (order: Required<Chai2>) => {
    console.log(order);
};

// ❗ Must include all properties
placeOrder({
    name: "Masala chai",
    quantity: 2
});


// -----------------------------
// UTILITY TYPES - PICK
// -----------------------------

type Chai3 = {
    name: string;
    price: number;
    isHot: boolean;
    ingredients: string[];
};

// Select only specific fields
type BasicChai = Pick<Chai3, "name" | "price">;

const chaiInfo: BasicChai = {
    name: "lemon tea",
    price: 30
};


// -----------------------------
// UTILITY TYPES - OMIT
// -----------------------------

type Chai4 = {
    name: string;
    price: number;
    isHot: boolean;
    secretIngredients: string[];
};

// Remove specific field
type PublicChai = Omit<Chai4, "secretIngredients">;

// Now PublicChai does NOT include secretIngredients