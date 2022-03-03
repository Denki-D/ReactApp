import React from "react";
import Navbar from "./komponente/Navbar";
import Prijava from "./stranice/Prijava";
import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { Container } from "react-bootstrap";
import { AuthProvider } from "./contexts/AuthContext";

export const App = () => {
  return (
    <Auth.Provider>
    <React.StrictMode>
    
      <BrowserRouter>
      <Navbar />
      <Container className="d-flex align-items-center justify-content-center" style={{ minHeight:"100vh"}}>
     
    <Prijava />
    </Container>
    </BrowserRouter>
    
    </React.StrictMode>
    
    </Auth.Provider>
    

  )
}

export default App;