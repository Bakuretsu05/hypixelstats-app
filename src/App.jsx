import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// Components
import BedwarsCard from "./components/Cards/BedwarsCard";
import SkywarsCard from "./components/Cards/SkywarsCard";
import Nav from "./components/Nav";
import About from "./routes/About";
import PlayerStats from "./routes/PlayerStats";
import RedirectToHome from "./routes/RedirectToHome";
import SearchPlayer from "./routes/SearchPlayer";
import Loading from "./components/Loading";
import { useGlobalContext } from "./context";

export default function App() {
  const { isLoading } = useGlobalContext();

  return (
    <div className="fullscreen-container">
      <Router>
        <Nav />
        <Routes>
          <Route
            path="/"
            element={isLoading ? <Loading /> : <SearchPlayer />}
          />
          <Route path="about" element={<About />} />
          <Route path="stats/:playerName" element={<PlayerStats />}>
            <Route path="bedwars" element={<BedwarsCard />} />
            <Route path="skywars" element={<SkywarsCard />} />
          </Route>
          <Route path="*" element={<RedirectToHome />} />
          {/*FIX THIS THING WHY NO WORK AA*/}
        </Routes>
      </Router>
    </div>
  );
}
