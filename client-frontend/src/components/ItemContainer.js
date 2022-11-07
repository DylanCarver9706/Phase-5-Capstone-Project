import React from "react";
import ItemCard from "./ItemCard";

function ItemContainer({ items }) {

    return (
        <ul className="cards">
            {items.map(item => <ItemCard item={item} key={item.id} />)}
        </ul>
    );
}

export default ItemContainer;

 // if (item.cart == false) {
    // items.filter(item => { return (
    // <ul className="cards">{item.title(item => <ItemCard item={item.cart} key={key.id}/>)}</ul>