// -----------------------------
// BASIC FUNCTION WITH PARAMETERS
// -----------------------------

// Function with typed parameters
function makeChai(type: string, cups: number) {
    console.log(`Making ${cups} cups of ${type} chai`);
}

// Function call
makeChai("Masala", 2);


// -----------------------------
// FUNCTION WITH RETURN TYPE
// -----------------------------

// Explicit return type (number)
function getChaiPrice(): number {
    return 23;
}


// -----------------------------
// FUNCTION RETURNING NULL
// -----------------------------

// If no order is provided, return null
// Return type is inferred as: string | null
function makeOrder(order: string) {
    if (!order) return null;
    return order;
}


// -----------------------------
// VOID FUNCTION
// -----------------------------

// void → function does not return anything
function logChai(): void {
    console.log("Chai is ready");
}


// -----------------------------
// OPTIONAL PARAMETERS
// -----------------------------

// Parameter is optional (may be undefined)
function orderChai1(type?: string) {
    console.log("Order type:", type);
}

// Valid calls
orderChai1();
orderChai1("Ginger");


// -----------------------------
// DEFAULT PARAMETERS
// -----------------------------

// Default value is used if no argument is passed
function orderChai2(type: string = "Masala") {
    console.log("Order type:", type);
}

// Valid calls
orderChai2();           // uses "Masala"
orderChai2("Elaichi");


// -----------------------------
// INLINE OBJECT TYPE IN FUNCTION
// -----------------------------

// Function with object parameter type
function createChai(order: {
    type: string;
    sugar: number;
    size: "small" | "large"; // union type restriction
}): number {
    console.log(
        `Creating ${order.size} ${order.type} chai with sugar level ${order.sugar}`
    );
    return 4; // number of cups prepared (example)
}

// Example usage
createChai({
    type: "Masala",
    sugar: 2,
    size: "large"
});
