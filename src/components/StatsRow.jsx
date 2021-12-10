import React from "react";
import "./StatsRow.css";

export default function StatsRow(props) {
  return (
    <p className="StatsRow">
      <span className="StatsRow__text">{`${props.text}: `}</span>
      <span className="StatsRow__value">{props.value}</span>
    </p>
  );
}
