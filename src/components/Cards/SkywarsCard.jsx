import React from "react";
import { useGlobalContext } from "../../context";

export default function SkywarsCard() {
  const { playerData } = useGlobalContext();
  const { SkyWars } = playerData.stats;

  return (
    <div className="SkywarsCard --stats-card">
      <h3 className="PlayerStats__title">SkywarsCard</h3>

      <ul className="PlayerStats__stats-list">
        <li>
          <span className="PlayerStats__stats-text">Star: </span>
          <span className="PlayerStats__stats-value">
            {SkyWars.levelFormatted.slice(2)}
          </span>
        </li>

        <li>
          <span className="PlayerStats__stats-text">Matches: </span>
          <span className="PlayerStats__stats-value">
            {SkyWars.games_played_skywars}
          </span>
        </li>

        <li>
          <span className="PlayerStats__stats-text">Wins: </span>
          <span className="PlayerStats__stats-value">{SkyWars.wins}</span>
        </li>

        <li>
          <span className="PlayerStats__stats-text">Losses: </span>
          <span className="PlayerStats__stats-value">{SkyWars.losses}</span>
        </li>

        <li>
          <span className="PlayerStats__stats-text">WLR: </span>
          <span className="PlayerStats__stats-value">
            {(SkyWars.wins / SkyWars.losses).toFixed(2)}
          </span>
        </li>

        <li>
          <span className="PlayerStats__stats-text">Time Played: </span>
          <span className="PlayerStats__stats-value">
            {new Date(SkyWars.time_played * 1000).toISOString().substr(11, 8)}
          </span>
        </li>

        <li>
          <span className="PlayerStats__stats-text">Kills: </span>
          <span className="PlayerStats__stats-value">{SkyWars.kills}</span>
        </li>

        <li>
          <span className="PlayerStats__stats-text">Kills: </span>
          <span className="PlayerStats__stats-value">{SkyWars.deaths}</span>
        </li>

        <li>
          <span className="PlayerStats__stats-text">KDR: </span>
          <span className="PlayerStats__stats-value">
            {(SkyWars.kills / SkyWars.deaths).toFixed(2)}
          </span>
        </li>

        <li>
          <span className="PlayerStats__stats-text">Assists: </span>
          <span className="PlayerStats__stats-value">{SkyWars.assists}</span>
        </li>

        <li>
          <span className="PlayerStats__stats-text">Kills/Game: </span>
          <span className="PlayerStats__stats-value">
            {(SkyWars.kills / SkyWars.games_played_skywars).toFixed(2)}
          </span>
        </li>
      </ul>
    </div>
  );
}
