import React from "react";
import StatsRow from "./StatsRow";

export default function StatsCard(props) {
  return (
    <div className="StatsCard">
      <h3 className="StatsCard__title">{props.title}</h3>
      {props.stats.map((stat) => (
        <StatsRow text={stat.text} value={stat.value} />
      ))}
    </div>
  );
}
