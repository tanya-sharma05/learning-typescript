function makeChai(type: string, cups: number){
    console.log(`Making ${cups} cups of ${type} chai`);
}

makeChai("Masala", 2);

function getChaiPrice(): number {
    return 23;
}

function makeOrder(order: string){
    if(!order) return null;
    return order;
}

function logChai(): void{
    console.log("Chai is ready");
}

function orderChai1(type?: string){
}

function orderChai2(type: string = "Masala"){
}

function createChai(order: {
    type: string
    sugar: number 
    size: "small" | "large"
}): number{
    return 4;
}

