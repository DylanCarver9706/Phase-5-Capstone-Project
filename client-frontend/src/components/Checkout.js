import React, { useState, useEffect } from "react";
import { Button } from "../styles";
import { Link } from "react-router-dom";


// after POST request is made and you are immediatly redirected to purchases, new purchase is not there
// upon refresh, it is there.
// need to find a way to auto refresh the page on load or delay the page from opening

// 3. Find a way to do a while/whatever loop to iterate through the items during the PATCH
// example: if inCartItems.length > 0, run handleCheckout on index [0]
function Checkout({ buyer }) {

    const [cartItems, setCartItems] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/items")
            .then(response => response.json())
            .then(data => setCartItems(data))
    }, [])

    let inCartItems = cartItems.filter(items => {
        return items.cart_status === true
    })
    
    const handleCheckout = () => {

        fetch(`/items/${inCartItems[0].id}`, {
            method: 'PATCH',
            headers: {
                "Content-Type": 'application/json',
            },
            body: JSON.stringify({ cart_status: !inCartItems[0].cart_status, sold_status: !inCartItems[0].sold_status })
        })
            .then(resp => resp.json())
            .then(data => console.log(data))

        let soldStatus = {
            buyer_id: buyer.id,
            item_id: inCartItems[0].id
        }

        fetch(`/purchased_items`, {
            method: 'POST',
            headers: {
                "Accept": 'application/json',
                "Content-Type": 'application/json',
            },
            body: JSON.stringify(soldStatus)
        })
            .then(resp => resp.json())
            .then(data => console.log(data))
    }

    return (
        <div>
            <h1>Confirm Details:</h1>
            <h2>Items: {inCartItems.length}</h2>
            {/* <h2>Total: {inCartItems[0].price}</h2> */}
            <h2>Ship To: {buyer.address}</h2>
            <h2>Fake Card Info: 1234-5678-9876-5432</h2>
            <h2>Email Confirmation: {buyer.email}</h2>
            <Button onClick={handleCheckout} as={Link} to="/"  >
                Checkout!
            </Button>
        </div>
    )
}

export default Checkout;