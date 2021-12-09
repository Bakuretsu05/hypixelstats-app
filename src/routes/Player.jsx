import React from "react";
import { Outlet } from "react-router";
import "./Player.css";
import PlayerInfo from "../components/PlayerInfo";

export default function Player() {
  return (
    <div className="Player">
      <PlayerInfo />
      <Outlet />
    </div>
  );
}
