import React from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../context";
import "./SearchPlayer.css";

export default function SearchPlayer() {
  const { fetchPlayerData, searchTerm, setSearchTerm } = useGlobalContext();
  const navigate = useNavigate();

  const searchPlayer = async () => {
    const isDataFetched = await fetchPlayerData();
    if (isDataFetched) {
      navigate(`stats/${searchTerm}`);
    } else {
      // TODO: Make a "No player found" modal
    }
  };

  return (
    <div className="SearchPlayer">
      <h3 className="SearchPlayer__title" htmlFor="playerName">
        Search Player
      </h3>
      <input
        className="SearchPlayer__input"
        type="text"
        placeholder="Enter a username"
        name="playerName"
        id="playerName"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button className="SearchPlayer__button" onClick={searchPlayer}>
        Show Player
      </button>
    </div>
  );
}
