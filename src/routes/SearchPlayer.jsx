import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "../components/Modal";
import { useGlobalContext } from "../context";
import Loading from "../components/Loading";
import "./SearchPlayer.css";

export default function SearchPlayer() {
  const { setSearchTerm, fetchPlayerData, isLoading } = useGlobalContext();
  const [modal, setModal] = useState({ show: false, text: "" });
  const navigate = useNavigate();

  const searchPlayer = async (e) => {
    e.preventDefault();
    const response = await fetchPlayerData();
    if (response === true) {
      navigate(`stats/${e.target.playerName.value}`);
    } else {
      setModal({ show: true, text: response });
      console.log(new Error(response));
    }
  };

  return isLoading ? (
    <Loading />
  ) : (
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
        {modal.show && <Modal text={modal.text} />}
      </form>
    </div>
  );
}
