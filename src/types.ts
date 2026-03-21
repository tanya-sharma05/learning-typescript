// -----------------------------
// TYPE ASSERTION (as keyword)
// -----------------------------

let response: any = "23";

// We are telling TypeScript: "Trust me, this is a string"
let length: number = (response as string).length;


// -----------------------------
// TYPE ASSERTION WITH OBJECTS
// -----------------------------

type Book = {
    name: string;
};

// JSON string (comes usually from API)
let bookString = '{"name" : "who moved my cheese"}';

// JSON.parse returns `any` by default → we assert it as Book
let bookObject = JSON.parse(bookString) as Book;
console.log(bookObject);


// -----------------------------
// TYPE ASSERTION WITH DOM
// -----------------------------

// getElementById returns HTMLElement | null
// We assert it as HTMLInputElement so we can access input-specific properties
let inputElement = document.getElementById("username") as HTMLInputElement;


// -----------------------------
// ANY vs UNKNOWN
// -----------------------------

// ANY → disables type checking (dangerous)
let value: any;

value = "chai";
value = [1, 2, 3];
value = 2.5;

// ❌ No error even though number doesn't have toUpperCase()
// This can crash at runtime
value.toUpperCase();


// UNKNOWN → safer alternative to any
let newVal: unknown;

newVal = "chai";
newVal = [1, 2, 3];
newVal = 2.5;

// ✅ Must check type before using it
if (typeof newVal === "string") {
    newVal.toUpperCase(); // safe
}


// -----------------------------
// ERROR HANDLING (TRY-CATCH)
// -----------------------------

try {
    // some risky code
} catch (error) {
    // `error` is of type unknown in TS
    if (error instanceof Error) {
        console.log(error.message); // safe access
    }

    console.log(error); // fallback
}


// -----------------------------
// UNKNOWN + TYPE ASSERTION
// -----------------------------

const data: unknown = "chai aur code";

// We assert it as string
const strData: string = data as string;


// -----------------------------
// UNION TYPES (Role)
// -----------------------------

type Role = "admin" | "user" | "super";

function redirectBasedOnRole(role: Role): void {
    if (role === "admin") {
        console.log("Redirecting to admin dashboard");
        return;
    }
    if (role === "user") {
        console.log("Redirecting to user dashboard");
        return;
    }
    // If we handle all cases above,
    // this line ensures exhaustiveness check
    // If a new role is added and not handled → TS error
    role;
}


// -----------------------------
// NEVER TYPE
// -----------------------------

// Function that NEVER returns
// (infinite loop or throws error)
function neverReturn(): never {
    while (true) {
        // infinite loop
    }
}