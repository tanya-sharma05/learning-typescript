// -----------------------------
// BASIC CLASS
// -----------------------------

class Chai1 {
    flavour: string;
    price: number;

    // Constructor initializes properties
    constructor(flavour: string, price: number) {
        this.flavour = flavour;
        this.price = price;
        console.log(this);
    }
}

// Creating object (instance)
const masalaChai = new Chai1("ginger", 20);

// Properties are public by default → can be modified
masalaChai.flavour = "lemon";


// -----------------------------
// ACCESS MODIFIERS
// -----------------------------

class Chai2 {
    public flavour: string = "masala";   // accessible everywhere
    private secretIngredients = "ginger"; // accessible only inside class

    reveal() {
        return this.secretIngredients;
    }
}


// -----------------------------
// PROTECTED (INHERITANCE USE)
// -----------------------------

class Shop {
    protected shopName = "chai code";
}

// Child class can access protected members
class Branch extends Shop {
    getName() {
        return this.shopName;
    }
}


// -----------------------------
// PRIVATE (#) - MODERN JAVASCRIPT
// -----------------------------

class Wallet {
    #balance = 100; // truly private (cannot be accessed outside)

    getBalance() {
        return this.#balance;
    }
}

const w = new Wallet();
// w.#balance ❌ Not accessible


// -----------------------------
// READONLY PROPERTIES
// -----------------------------

class Cup {
    readonly capacity: number;

    constructor(capacity: number) {
        this.capacity = capacity; // can only be set in constructor
    }
}

// const cup = new Cup(20);
// cup.capacity = 30 ❌ Error


// -----------------------------
// GETTERS & SETTERS
// -----------------------------

class ModernChai {
    private _sugar = 2;

    // Getter (read value)
    get sugar() {
        return this._sugar;
    }

    // Setter (update with validation)
    set sugar(value: number) {
        if (value > 5) throw new Error("too sweet");
        this._sugar = value;
    }
}

const c = new ModernChai();
c.sugar = 3; // uses setter


// -----------------------------
// STATIC PROPERTIES
// -----------------------------

class EkChai {
    static brand = "chai code"; // belongs to class, not instance

    constructor(public flavour: string) {}
}

// Access static property using class name
console.log(EkChai.brand);


// -----------------------------
// ABSTRACT CLASSES
// -----------------------------

// Cannot be instantiated directly
abstract class Drink {
    abstract make(): void; // must be implemented by child class
}

// Child class must implement abstract method
class MyChai extends Drink {
    make() {
        console.log("brewing chai");
    }
}


// -----------------------------
// DEPENDENCY INJECTION (BASIC)
// -----------------------------

class Heater {
    heat() {
        console.log("Heating...");
    }
}

// Inject dependency via constructor
class ChaiMaker {
    constructor(private heater: Heater) {}

    make() {
        this.heater.heat(); // using injected dependency
    }
}

// Usage
const maker = new ChaiMaker(new Heater());
maker.make();