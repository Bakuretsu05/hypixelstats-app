import React, { useEffect, useState } from "react";
import { Outlet, useParams, useNavigate, useLocation } from "react-router";
import "./Player.css";
import { useGlobalContext } from "../context";
import PlayerInfo from "../components/PlayerInfo";
import Loading from "../components/Loading";
import Modal from "../components/Modal";
import SelectMode from "../components/SelectMode";

export default function Player() {
  const params = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [localLoading, setLocalLoading] = useState(true);
  const [modal, setModal] = useState({ show: false, text: "" });
  const [selectedMode, setSelectedMode] = useState(
    location.pathname.slice(location.pathname.lastIndexOf("/") + 1)
  );
  const { playerData, fetchPlayerData } = useGlobalContext();

  useEffect(() => {
    const currentGamemodeUrl = location.pathname.slice(
      location.pathname.lastIndexOf("/") + 1
    );
    if (selectedMode !== currentGamemodeUrl) {
      setSelectedMode(currentGamemodeUrl);
    }
  }, [location, selectedMode]);

  useEffect(() => {
    if (
      playerData === null ||
      sessionStorage.getItem("playerName") !== params.playerName.toLowerCase()
    ) {
      const handleFetch = async () => {
        const response = await fetchPlayerData(params.playerName);
        if (response === true) {
          setLocalLoading(false);
        } else {
          setModal({ show: true, text: response });
          console.log(new Error(response));
        }
      };
      handleFetch();
    } else {
      setLocalLoading(false);
    }
  }, [fetchPlayerData, params.playerName, playerData]);

  const handleGamemodeChange = (e) => {
    setSelectedMode(e.target.value);
    if (e.target.value !== "") navigate(e.target.value);
  };

  return localLoading ? (
    modal.show ? (
      <Modal text={modal.text} />
    ) : (
      <Loading />
    )
  ) : (
    <div className="Player">
      <PlayerInfo />
      <div className="Player__stats">
        <SelectMode
          selectedMode={selectedMode}
          handleChange={handleGamemodeChange}
        />
        <Outlet />
      </div>
    </div>
  );
}
