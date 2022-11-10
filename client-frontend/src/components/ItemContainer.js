import React from "react";
import ItemCard from "./ItemCard";

function ItemContainer({ items }) {

    let availableItems = items.filter(item => {
            return item.sold_status === false
        })
        console.log(availableItems)

    return (
        <div>
                <ul className="cards">
                    {availableItems.map(item => <ItemCard item={item} key={item.id} />)}
                </ul>
        </div>
    )
}

export default ItemContainer;

 // if (item.cart == false) {
    // items.filter(item => { return (
    // <ul className="cards">{item.title(item => <ItemCard item={item.cart} key={key.id}/>)}</ul>