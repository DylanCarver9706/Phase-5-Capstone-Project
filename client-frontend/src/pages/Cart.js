import React, { useState, useEffect } from "react";
import ItemCardCart from "../components/ItemCardCart";
import { Button } from "../styles";
import { Link } from "react-router-dom";
// import Checkout from "../components/Checkout";

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
            <Button as={Link} to="/checkout">
                Ready to Checkout?
            </Button>
            {/* <p>{inCartItems.map(item => <Checkout item={item} key={item.id} />)}</p> */}
                
            <ul className="cards">
                {inCartItems.map(cartItems => <ItemCardCart cartItems={cartItems} key={cartItems.id}  />)}
            </ul>
        </div>
    )
}

export default Cart;