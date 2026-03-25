import type { Chai } from "../types";
import { Card } from "./Card";

interface ListProps{
    items: Chai[]
}

export function List({items}: ListProps){
    return (
        <div>
            {items.map((chai) => (
                <Card key={chai.id} name={chai.name} price={chai.price} isSpecial={chai.price > 30} />
            ))}
        </div>
    )
}