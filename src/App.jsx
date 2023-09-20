import "./components/styles/App.css";
import React, { useEffect } from "react";
// import NoAuthorized from "./pages/NoAuthorized";
import { BrowserRouter } from "react-router-dom";
import Authorized from "./pages/Authorized";
import NoAuthorized from "./pages/NoAuthorized";
import { useSelector } from "react-redux";



function App() {

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  return (
    <BrowserRouter>
    <div className="App">
    {isAuthenticated ? <Authorized /> : <NoAuthorized />}
   
    </div>
  </BrowserRouter>

  );
}

export default App;
