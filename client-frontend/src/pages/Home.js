import React from "react";
import NavBar from "../components/NavBar";




return (
    <main>
      <NavBar />
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      <ItemContainer items={filteredItems}/>
    </main>
  );