import React from "react";
import { Routes, Route } from "react-router-dom";
import DiscoverPage from "./DiscoverPage";
import FiltersPage from "./FiltersPage";
import SettingsPage from "./SettingsPage";
import MoviePage from "./MoviePage";

import "../components/styles/App.css";

import Navbar from "../components/Navbar/Navbar";

const Authorized = () => {
  return (
    <div className="App-body">
      <Navbar />

      <div className="App-main">
        <Routes>
          <Route path="/" element={<DiscoverPage />} />
          <Route path="/filters" element={<FiltersPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/movie/:id" element={<MoviePage />} />
        </Routes>
      </div>
    </div>
  );
};

export default Authorized;
