import React from "react";
//import Navbar from "./komponente/Navbar";
import { useEffect } from "react";
//import { BrowserRouter, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import { AuthProvider } from "./contexts/AuthContext";
import Signup from "./komponente/Signup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export const App = () => {
  return (
   
   <Container classname="d-flex align-items-center 
   justify-content-center"
   style={{minHeight:"100vh" }}>
     <div className="w-100" style={{maxWidth: '400px'}}>
   <Router>
   <AuthProvider>
     <Routes>
       <Route path="/rega" element={<Signup/>}/>
     </Routes>
   </AuthProvider>
   </Router>
   <Signup />
    </div>
   </Container>
  
  )
}

export default App;