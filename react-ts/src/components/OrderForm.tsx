import { useState } from "react";

interface orderformProps {
    onSubmit(order: {
        name: string
        cups: number 
    }): void 
};


export function Orderform({onSubmit} : orderformProps){
    const [name, setName]= useState<string>("Masala");
    const [cups, setCups]= useState<number>(1);

    function handleSubmit(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        onSubmit({name, cups});
    };

    return <form onSubmit={handleSubmit}>
        <label>Chai name</label>
        <input value={name} onChange={(e: React.ChangeEvent<HTMLInputElement>)=> setName(e.target.value)} />

        <label>Cups</label>
        <input type="number" value={cups} onChange={(e: React.ChangeEvent<HTMLInputElement>)=> setCups(Number(e.target.value) || 0)} />
        <button type="submit">Place Order</button>
    </form>
}