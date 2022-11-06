import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Login from "../pages/Login";

function App() {
  const [buyer, setBuyer] = useState(null);
  const [items, setItems] = useState([])
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((buyer) => setUser(buyer));
      }
    });
  }, []);

  if (!user) return <Login onLogin={setBuyer} />;

  let filteredItems = items.filter(item => {
    return item.title.toLowerCase().includes(searchTerm)
  })

  return (
    <BrowserRouter>
    <NavBar buyer={buyer} setBuyer={setBuyer} />
      <div className="App">
        <Switch>
          <Route path="/home"></Route>
          <Route path="/purchases">
            {/* <Items /> */}
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;