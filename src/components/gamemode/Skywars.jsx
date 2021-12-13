import React, { useMemo } from "react";
import "./gamemode.css";
import icon from "../../assets/skywars-icon.png";
import { useGlobalContext } from "../../context";
import { calculatePlaytime } from "../../helper";
import StatsCard from "../StatsCard";

export default function SkywarsCard() {
  const { playerData } = useGlobalContext();
  const { SkyWars } = playerData.stats;

  const stats = useMemo(() => {
    return [
      {
        title: "General Stats",
        stats: [
          {
            text: "Star",
            value: `[${SkyWars.levelFormatted.slice(2)}]`,
          },
          {
            text: "Coins",
            value: SkyWars.coins,
          },
          {
            text: "Souls",
            value: SkyWars.souls,
          },
          {
            text: "Shards",
            value: SkyWars.shard,
          },
          {
            text: "Opals",
            value: SkyWars.opals,
          },
          {
            text: "Heads",
            value: SkyWars.heads,
          },
          {
            text: "Tokens",
            value: SkyWars.cosmetic_tokens,
          },
        ],
      },
      {
        title: "Games",
        stats: [
          {
            text: "Matches",
            value: SkyWars.wins + SkyWars.losses,
          },
          {
            text: "Wins",
            value: SkyWars.wins,
          },
          {
            text: "Losses",
            value: SkyWars.losses,
          },
          {
            text: "WLR",
            value: (SkyWars.wins / SkyWars.losses).toFixed(2),
          },
          {
            text: "Playtime",
            value: calculatePlaytime(SkyWars.time_played),
          },
        ],
      },
      {
        title: "Combat",
        stats: [
          {
            text: "Kills",
            value: SkyWars.kills,
          },
          {
            text: "Deaths",
            value: SkyWars.deaths,
          },
          {
            text: "KDR",
            value: (SkyWars.kills / SkyWars.deaths).toFixed(2),
          },
          {
            text: "Assists",
            value: SkyWars.assists,
          },
          {
            text: "Kills/Game",
            value: (SkyWars.kills / (SkyWars.wins + SkyWars.losses)).toFixed(2),
          },
        ],
      },
    ];
  }, [
    SkyWars.assists,
    SkyWars.coins,
    SkyWars.cosmetic_tokens,
    SkyWars.deaths,
    SkyWars.heads,
    SkyWars.kills,
    SkyWars.levelFormatted,
    SkyWars.losses,
    SkyWars.opals,
    SkyWars.shard,
    SkyWars.souls,
    SkyWars.time_played,
    SkyWars.wins,
  ]);

  return (
    <div className="gamemode-container">
      <header className="gamemode__header">
        <img className="gamemode__icon" src={icon} alt="Skywars Icon" />
        <h3 className="gamemode__title">Skywars</h3>
      </header>
      <main className="gamemode__stats">
        {stats.map((stat) => (
          <StatsCard key={stat.title} {...stat} />
        ))}
      </main>
    </div>
  );
}
