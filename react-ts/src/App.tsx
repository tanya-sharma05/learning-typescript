import { Card } from "./components/Card.tsx";
import { Counter } from "./components/Counter.tsx";
import { List } from "./components/List.tsx";
import type { Chai } from "./types.ts";
import { Orderform } from "./components/OrderForm.tsx";
import { CardProp } from "./components/CardProp.tsx";

const menu: Chai[] = [
  {id: 1, name: "Masala", price: 20},
  {id: 2, name: "Ginger", price: 25},
  {id: 3, name: "Lemon", price: 30}
]

function App() {
  return (
    <>
      <h1>Hello</h1>
      <Card name="Headpohones" price={5000} />
      <div>
        <Counter />
      </div>
      <div>
        <List items={menu} />
      </div>
      <div>
        <Orderform onSubmit={(order) => {
          console.log("Placed:", order.name, order.cups);
        }} />
      </div>
      <div>
        <CardProp title="Chai aur typescript" footer={<button>Order Now</button>} />
      </div>
    </>
  )
}

export default App
