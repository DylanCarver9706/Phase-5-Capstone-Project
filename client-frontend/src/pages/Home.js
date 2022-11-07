import React, {useState, useEffect} from "react";
import NavBar from "../components/NavBar";
import Search from "../components/Search"
import ItemContainer from "../components/ItemContainer";


function Home() {

    const [items, setItems] = useState([])
    const [searchTerm, setSearchTerm] = useState("")

    useEffect(() => {
        fetch(`/items`)
            .then(response => response.json())
            .then(data => setItems(data))
    }, [])

    let filteredItems = items.filter(item => {
        return item.title.toLowerCase().includes(searchTerm)
    })

    return (
        <main>
            <NavBar />
            <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <ItemContainer items={filteredItems} />
        </main>
    );
}

export default Home;