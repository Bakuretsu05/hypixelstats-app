import React from "react";
import "./Loading.css";
import elainaflower from "../assets/elainaflower.png";

export default function Loading() {
  return (
    <div className="Loading">
      <img
        className="Loading__elaina-loading --floatingAnimation"
        id="Loading__elaina-loading"
        src={elainaflower}
        alt="Elaina sitting on top of flowers"
      />
      <h3 className="Loading__loading-text">Loading...</h3>
    </div>
  );
}
