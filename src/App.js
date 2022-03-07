import React from "react";
//import Navbar from "./komponente/Navbar";
//import Signup from "./komponente/Singup";
import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { Container } from "react-bootstrap";
import { AuthProvider } from "./contexts/AuthContext";
import Signup from "./komponente/Signup";

export const App = () => {
  return (
   // <Auth.Provider>
   <Signup />
  )
}

export default App;