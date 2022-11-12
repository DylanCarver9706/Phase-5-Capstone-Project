import React, { useState, useEffect } from "react";
import Search from "../components/Search"
import ItemContainer from "../components/ItemContainer";
import NavBar from "../components/NavBar"
// import { Button } from "../styles";
// import { Link } from "react-router-dom";



function Home({buyer, setBuyer}) {

    const [items, setItems] = useState([])
    // const [buyer, setBuyer] = useState(null);

    const [searchTerm, setSearchTerm] = useState("")

    useEffect(() => {
        fetch("http://localhost:3000/items")
            .then(response => response.json())
            .then(data => setItems(data))
    }, [])

    let filteredItems = items.filter(item => {
        return item.item_name.toLowerCase().includes(searchTerm)
    })

    // console.log(filteredItems)


    return (
        <main>
            <NavBar buyer={buyer} setBuyer={setBuyer}/>
            {/* <Cart items={filteredItems} /> */}
            {/* <Button as={Link} to="/cart">
                Cart
            </Button> */}
            <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <ItemContainer items={filteredItems} />
        </main>
    );
}

export default Home;