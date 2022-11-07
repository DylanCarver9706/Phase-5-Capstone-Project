import React, { useState, useEffect } from "react";
// 
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Login from "../pages/Login";
import Home from "../pages/Home";



function App() {
  const [buyer, setBuyer] = useState(null);


  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((buyer) => setBuyer(buyer));
      }
    });
  }, []);



  if (!buyer) return <Login onLogin={setBuyer} />;

  return (
    <>
      <NavBar buyer={buyer} setBuyer={setBuyer} />
      <div className="App">
        <Switch>

          <Route exact path="/">
            <Home />
          </Route>

          {/* <Route path="/purchases"> */}
          {/* <Purchases/> */}
          {/* </Route> */}

        </Switch>
      </div>
    </>
  );
}

export default App;