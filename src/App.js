import React from "react";
//import Navbar from "./komponente/Navbar";
import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { Container } from "react-bootstrap";
import { AuthProvider } from "./contexts/AuthContext";
//import Signup from "./komponente/Signup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./komponente/Login";
import UpdateProfile from "./komponente/UpdateProfil";
import Naslovnica from "./stranice/Naslovnica";
import PrivateRoute from "./stranice/PrivateRoute";

export const App = () => {
  return (
    <Container className="d-flex align-items-center 
   justify-content-center"
      style={{ minHeight: "100vh" }}>
      <div className="w-100" style={{ maxWidth: '400px' }}>
        <Router>
          <AuthProvider>
            <Routes>
              <Route exact path="/" element={<Naslovnica />}/>
              <Route path="/azuriranje" element={<UpdateProfile />} />
              <Route path="/prijava" element={<Login />} />
            </Routes>
          </AuthProvider>
        </Router>
      </div>
    </Container>

  )
}

export default App;