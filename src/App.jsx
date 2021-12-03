import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// Components
import BedwarsCard from "./components/Cards/BedwarsCard";
import SkywarsCard from "./components/Cards/SkywarsCard";
import Nav from "./components/Nav";
import About from "./routes/About";
import PlayerStats from "./routes/PlayerStats";
import SearchPlayer from "./routes/SearchPlayer";

export default function App() {
  return (
    <div className="fullscreen-container">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<SearchPlayer />} />
          <Route path="about" element={<About />} />
          <Route path="stats/:playerName" element={<PlayerStats />}>
            <Route path="bedwars" element={<BedwarsCard />} />
            <Route path="skywars" element={<SkywarsCard />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}
