import React, { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router";
import "./Player.css";
import { useGlobalContext } from "../context";
import PlayerInfo from "../components/PlayerInfo";
import Loading from "../components/Loading";
import Modal from "../components/Modal";

export default function Player() {
  const [localLoading, setLocalLoading] = useState(true);
  const [modal, setModal] = useState({ show: false, text: "" });
  const { playerData, fetchPlayerData } = useGlobalContext();
  const params = useParams();

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

  return localLoading ? (
    modal.show ? (
      <Modal text={modal.text} />
    ) : (
      <Loading />
    )
  ) : (
    <div className="Player">
      <PlayerInfo />
      <Outlet />
    </div>
  );
}
