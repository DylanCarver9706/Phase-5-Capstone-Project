import React from "react";
// , { useState, useEffect }
import { Button } from "../styles";
import { Link } from "react-router-dom";



function Checkout() {

    // const [cartItems, setCartItems] = useState([])

    // useEffect(() => {
    //     fetch("http://localhost:3000/items")
    //         .then(response => response.json())
    //         .then(data => setCartItems(data))
    // }, [])

    // let inCartItems = cartItems.filter(items => {
    //     return items.cart_status === true
    // })

    const handleCheckout = () => {

    }
    
    // console.log(inCartItems)

    return (
        <div>
            <h1>Confirm Details:</h1>
            <h2>Total: </h2>
            <h2>Ship To: </h2>
            <h2>Fake Card Info: 1234-5678-9876-5432</h2>
            <Button onClick={handleCheckout} as={Link} to="/purchases" >
                Purchases
            </Button>

        </div>
    )
}

export default Checkout;