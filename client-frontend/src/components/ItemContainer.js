import React from "react";
import ItemCard from "./ItemCard";

function ItemContainer({ items }) {

    let availableItems = items.filter(item => {
        return item.sold_status === false
    })
    // console.log(availableItems)

    return (
        <div>
            <ul className="cards">
                {availableItems.map(item => <ItemCard item={item} key={item.id} />)}
            </ul>
        </div>
    )
}

export default ItemContainer;