import React, { useState, useEffect } from "react";
// import NavBar from "../components/NavBar";
// import Search from "../components/Search"
import ItemContainer from "../components/ItemContainer";


function Home() {

    const [items, setItems] = useState([])
    // const [buyer, setBuyer] = useState(null);

    // const [searchTerm, setSearchTerm] = useState("")

    useEffect(() => {
        fetch("http://localhost:3000/items")
            .then(response => response.json())
            .then(data => setItems(data))
        // console.log(setItems)
    }, [])

    // let filteredItems = items.filter(item => {
    //     return item.title.toLowerCase().includes(searchTerm)
    // })

    return (
        <main>
            {/* <NavBar buyer={buyer} setBuyer={setBuyer} /> */}
            {/* <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} /> */}
            <ItemContainer items={items} />
        </main>
    );
}

export default Home;