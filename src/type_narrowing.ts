// -----------------------------
// 1. BASIC TYPE NARROWING (typeof)
// -----------------------------

// Function accepts string OR number
function getChai(kind: string | number) {
    // TYPE NARROWING using typeof
    // TypeScript checks the runtime type and narrows it inside this block
    if (typeof kind === "string") {
        return `Making ${kind} chai`;
    }

    // Here, TypeScript knows `kind` is a number
    return `Chai number ${kind}`;
};


// -----------------------------
// 2. OPTIONAL PARAMETERS
// -----------------------------

function serveChai(message?: string) {
    // If message is provided → use it
    if (message) {
        return `Serving ${message} chai`;
    }

    // Default case
    return `Serving default chai`;
};


// -----------------------------
// 3. LITERAL TYPES + UNION
// -----------------------------

function orderChai(size: "small" | "medium" | "large" | number) {
    // Type narrowing using literal comparison
    if (size === "small") {
        return `Small chai`;
    }

    if (size === "medium" || size === "large") {
        return `Medium or large chai`;
    }

    // If it's not a string literal → must be number
    return `Chai number #${size}`;
};


// -----------------------------
// 4. CLASS-BASED TYPE NARROWING (instanceof)
// -----------------------------

class KulhadChai {
    serve() {
        return `Serving kulhad chai`;
    }
}

class CuttingChai {
    serve() {
        return `Serving cutting chai`;
    }
}

function serveChaiByCup(chai: KulhadChai | CuttingChai) {
    // TYPE NARROWING using instanceof
    if (chai instanceof KulhadChai) {
        return chai.serve();
    }

    // If not Kulhad → must be Cutting
    return chai.serve();
};


// -----------------------------
// 5. CUSTOM TYPE GUARD (VERY IMPORTANT)
// -----------------------------

type ChaiOrder = {
    type: string;
    sugar: number;
};

// Custom type guard function
function isChaiOrder(obj: any): obj is ChaiOrder {
    return (
        typeof obj === "object" &&
        obj !== null &&
        typeof obj.type === "string" &&
        typeof obj.sugar === "number"
    );
};

function serveChaiOrder(item: ChaiOrder | string) {
    // TYPE NARROWING using custom type guard
    if (isChaiOrder(item)) {
        return `Serving ${item.type} chai with ${item.sugar} sugar`;
    }

    // Otherwise it's a string
    return `Serving custom chai: ${item}`;
};


// -----------------------------
// 6. DISCRIMINATED UNION (BEST PRACTICE)
// -----------------------------

type MasalaChai = {
    type: "masala";
    spiceLevel: number;
};

type GingerChai = {
    type: "ginger";
    gingerAmount: number;
};

type ElaichiChai = {
    type: "elaichi";
    aromaLevel: number;
};

// Union of all chai types
type ChaiVariant = MasalaChai | GingerChai | ElaichiChai;

function makeChai(order: ChaiVariant) {
    // TYPE NARROWING using discriminated union
    // "type" acts as a discriminator

    switch (order.type) {
        case "masala":
            // TypeScript knows this is MasalaChai
            return `Masala chai with spice level ${order.spiceLevel}`;

        case "ginger":
            // Now it's GingerChai
            return `Ginger chai with amount ${order.gingerAmount}`;

        case "elaichi":
            return `Elaichi chai with aroma ${order.aromaLevel}`;
    }
};