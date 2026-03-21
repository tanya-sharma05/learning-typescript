// union 
let subscribers: number | string = '1M';

let airlineSeat: 'aisle' | 'middle' | 'window'= 'aisle';
airlineSeat= 'window';

// any
const orders= ['12', '28', '42', '76'];

let customerOrder: string | undefined; // if we'll not annotate, data type will be any
for(let order of orders){
    if(order === '28'){
        customerOrder = order;
        break;
    }
}
console.log(customerOrder);