import React from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../context";
import "./SearchPlayer.css";

export default function SearchPlayer() {
  const { setSearchTerm, fetchPlayerData } = useGlobalContext();
  const navigate = useNavigate();

  const searchPlayer = async (e) => {
    e.preventDefault();
    const isDataFetched = await fetchPlayerData();
    if (isDataFetched) {
      navigate(`stats/${e.target.playerName.value}`);
    } else {
      // TODO: Make a "No player found" modal
    }
  };

  return (
    <div className="SearchPlayer">
      <h3 className="SearchPlayer__title" htmlFor="playerName">
        Search Player
      </h3>
      <form className="SearchPlayer__form" onSubmit={searchPlayer}>
        <input
          className="SearchPlayer__input"
          type="text"
          placeholder="Enter a username"
          name="playerName"
          id="playerName"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="SearchPlayer__button" type="submit">
          Show Player
        </button>
      </form>
    </div>
  );
}
