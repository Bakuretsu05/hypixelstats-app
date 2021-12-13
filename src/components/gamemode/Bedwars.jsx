import React, { useMemo } from "react";
import "./gamemode.css";
import icon from "../../assets/bedwars-icon.jpg";
import { getBedwarsStarsByExp } from "../../helper";
import { useGlobalContext } from "../../context";
import StatsCard from "../StatsCard";

export default function Bedwars() {
  const { playerData } = useGlobalContext();
  const { Bedwars } = playerData.stats;

  const stats = useMemo(() => {
    return [
      {
        title: "General Stats",
        stats: [
          {
            text: "Star",
            value: getBedwarsStarsByExp(Bedwars.Experience) + "✫",
          },
          {
            text: "Coins",
            value: Bedwars.coins,
          },
          {
            text: "Loot Chests",
            value:
              Bedwars.bedwars_boxes +
              Bedwars.bedwars_christmas_boxes +
              Bedwars.bedwars_easter_boxes +
              Bedwars.bedwars_halloween_boxes,
          },
        ],
      },
      {
        title: "Games",
        stats: [
          {
            text: "Winstreak",
            value: Bedwars.winstreak,
          },
          {
            text: "Wins",
            value: Bedwars.wins_bedwars,
          },
          {
            text: "Losses",
            value: Bedwars.losses_bedwars,
          },
          {
            text: "WLR",
            value: (Bedwars.wins_bedwars / Bedwars.losses_bedwars).toFixed(2),
          },
        ],
      },
      {
        title: "Combat",
        stats: [
          {
            text: "Kills",
            value: Bedwars.kills_bedwars,
          },
          {
            text: "Deaths",
            value: Bedwars.deaths_bedwars,
          },
          {
            text: "KDR",
            value: (Bedwars.kills_bedwars / Bedwars.deaths_bedwars).toFixed(2),
          },
        ],
      },
      {
        title: "Finals",
        stats: [
          {
            text: "Final Kills",
            value: Bedwars.final_kills_bedwars,
          },
          {
            text: "Final Deaths",
            value: Bedwars.final_deaths_bedwars,
          },
          {
            text: "FKDR",
            value: (
              Bedwars.final_kills_bedwars / Bedwars.final_deaths_bedwars
            ).toFixed(2),
          },
        ],
      },
      {
        title: "Beds",
        stats: [
          {
            text: "Beds Broken",
            value: Bedwars.beds_broken_bedwars,
          },
          {
            text: "Beds Lost",
            value: Bedwars.beds_lost_bedwars,
          },
          {
            text: "BBLR",
            value: (
              Bedwars.beds_broken_bedwars / Bedwars.beds_lost_bedwars
            ).toFixed(2),
          },
        ],
      },
      {
        title: "Averages per Game",
        stats: [
          {
            text: "Kills",
            value: (
              Bedwars.kills_bedwars / Bedwars.games_played_bedwars
            ).toFixed(2),
          },
          {
            text: "Final Kills",
            value: (
              Bedwars.final_kills_bedwars / Bedwars.games_played_bedwars
            ).toFixed(2),
          },
          {
            text: "Beds Broken",
            value: (
              Bedwars.beds_broken_bedwars / Bedwars.games_played_bedwars
            ).toFixed(2),
          },
        ],
      },
    ];
  }, [
    Bedwars.Experience,
    Bedwars.beds_broken_bedwars,
    Bedwars.beds_lost_bedwars,
    Bedwars.bedwars_boxes,
    Bedwars.bedwars_christmas_boxes,
    Bedwars.bedwars_easter_boxes,
    Bedwars.bedwars_halloween_boxes,
    Bedwars.coins,
    Bedwars.deaths_bedwars,
    Bedwars.final_deaths_bedwars,
    Bedwars.final_kills_bedwars,
    Bedwars.games_played_bedwars,
    Bedwars.kills_bedwars,
    Bedwars.losses_bedwars,
    Bedwars.wins_bedwars,
    Bedwars.winstreak,
  ]);

  return (
    <div className="gamemode-container">
      <header className="gamemode__header">
        <img className="gamemode__icon" src={icon} alt="Bedwars Icon" />
        <h3 className="gamemode__title">Bedwars</h3>
      </header>
      <main className="gamemode__stats">
        {stats.map((stat) => (
          <StatsCard key={stat.title} {...stat} />
        ))}
      </main>
    </div>
  );
}
