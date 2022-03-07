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
   <AuthProvider>
   <Container classname="d-flex align-items-center 
   justify-content-center"
   style={{minHeight:"100vh" }}>
     <div className="w-100" style={{maxWidth: '400px'}}>
   <Signup />
    </div>
   </Container>
   </AuthProvider>
  )
}

export default App;