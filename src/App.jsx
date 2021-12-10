import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// Components
import Bedwars from "./components/gamemode/Bedwars";
import Skywars from "./components/gamemode/Skywars";
import Nav from "./components/Nav";
import About from "./routes/About";
import Player from "./routes/Player";
import RedirectTo from "./routes/RedirectTo";
import SearchPlayer from "./routes/SearchPlayer";

export default function App() {
  return (
    <div className="fullscreen-container">
      <Router>
        <Nav />
        <Routes>
          <Route path="hypixelstats-app">
            <Route path="" element={<SearchPlayer />} />
            <Route path="about" element={<About />} />
            <Route path="stats/:playerName" element={<Player />}>
              <Route path="bedwars" element={<Bedwars />} />
              <Route path="skywars" element={<Skywars />} />
            </Route>
            <Route path="*" element={<RedirectTo to="" />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}
