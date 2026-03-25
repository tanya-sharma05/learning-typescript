interface CardProp{
    name: string
    price: number 
    isSpecial?: boolean
}

export function Card({name, price, isSpecial = false}: CardProp){
    return <article>
        <h2>
            {name} {isSpecial && <span>star</span>}
        </h2>
        <p>{price}</p>
    </article>
}