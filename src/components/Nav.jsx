import React from "react";
import "./Nav.css";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

export default function Nav() {
  const navigate = useNavigate();

  return (
    <div className="Nav">
      <img
        className="Nav__logo"
        src={logo}
        alt="logo of PixieStats"
        onClick={() => navigate("/")}
      />

      <h3 className="Nav__about" onClick={() => navigate("about")}>
        About
      </h3>
    </div>
  );
}
