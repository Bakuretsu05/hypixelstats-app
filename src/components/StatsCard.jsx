import React from "react";
import "./StatsCard.css";
import StatsRow from "./StatsRow";

export default function StatsCard(props) {
  return (
    <div className="StatsCard">
      <h3 className="StatsCard__title">{props.title}</h3>
      <div className="StatsCard__stats">
        {props.stats.map((stat) => (
          <StatsRow
            key={stat.text}
            text={stat.text}
            value={stat.value ? stat.value.toLocaleString() : "N/A"}
          />
        ))}
      </div>
    </div>
  );
}
