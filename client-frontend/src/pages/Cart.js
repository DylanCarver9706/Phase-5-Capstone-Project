import React, { useState, useEffect } from "react";
import Checkout from "../components/Checkout";
import ItemCardCart from "../components/ItemCardCart";

function Cart() {
    // console.log(items)

    const [cartItems, setCartItems] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/items")
            .then(response => response.json())
            .then(data => setCartItems(data))
    }, [])

    let inCartItems = cartItems.filter(items => {
        return items.cart_status === true
    })
    
    // console.log(inCartItems)

    return (
        <div>
            <Checkout />
            <ul className="cards">
                {inCartItems.map(cartItems => <ItemCardCart cartItems={cartItems} key={cartItems.id} />)}
            </ul>
        </div>
    )
}

export default Cart;