import React from "react";
import { routes } from "../gamemodeRoutes";
import "./SelectMode.css";

export default function SelectMode(props) {
  return (
    <div className="SelectMode">
      <select
        className="SelectMode__select"
        value={props.selectedMode}
        onChange={props.handleChange}
      >
        <option value="">-- Select a Gamemode --</option>
        {routes.map((route) => (
          <option key={route.gamemode} value={route.route}>
            {route.gamemode}
          </option>
        ))}
      </select>
    </div>
  );
}
