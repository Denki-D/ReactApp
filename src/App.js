import React from "react";
import Navbar from "./komponente/Navbar";
import Prijava from "./stranice/Prijava";
import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";

export const App = () => {
  return (
      <BrowserRouter>
      <div>
    <Navbar />
    <Route exact path="/"></Route>
    <Prijava />
    </div>
    </BrowserRouter>
  )
}

export default App;