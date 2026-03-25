import type { PropsWithChildren, ReactNode } from "react";

interface CardProp extends PropsWithChildren{
    title: string
    footer?: ReactNode
}

export function CardProp({title, children, footer}: CardProp){
    return (
        <div>
            <h2>{title}</h2>
            <div>{children}</div>
            {footer && <footer>{footer}</footer>}
        </div>
    )
}