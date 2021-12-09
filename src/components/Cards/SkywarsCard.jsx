import React from "react";
import { useGlobalContext } from "../../context";

export default function SkywarsCard() {
  const { playerData } = useGlobalContext();
  const { SkyWars } = playerData.stats;

  return (
    <div className="SkywarsCard --stats-card">
      <h3 className="Player__title">SkywarsCard</h3>

      <ul className="Player__stats-list">
        <li>
          <span className="Player__stats-text">Star: </span>
          <span className="Player__stats-value">
            {SkyWars.levelFormatted.slice(2)}
          </span>
        </li>

        <li>
          <span className="Player__stats-text">Matches: </span>
          <span className="Player__stats-value">
            {SkyWars.games_played_skywars}
          </span>
        </li>

        <li>
          <span className="Player__stats-text">Wins: </span>
          <span className="Player__stats-value">{SkyWars.wins}</span>
        </li>

        <li>
          <span className="Player__stats-text">Losses: </span>
          <span className="Player__stats-value">{SkyWars.losses}</span>
        </li>

        <li>
          <span className="Player__stats-text">WLR: </span>
          <span className="Player__stats-value">
            {(SkyWars.wins / SkyWars.losses).toFixed(2)}
          </span>
        </li>

        <li>
          <span className="Player__stats-text">Time Played: </span>
          <span className="Player__stats-value">
            {new Date(SkyWars.time_played * 1000).toISOString().substr(11, 8)}
          </span>
        </li>

        <li>
          <span className="Player__stats-text">Kills: </span>
          <span className="Player__stats-value">{SkyWars.kills}</span>
        </li>

        <li>
          <span className="Player__stats-text">Kills: </span>
          <span className="Player__stats-value">{SkyWars.deaths}</span>
        </li>

        <li>
          <span className="Player__stats-text">KDR: </span>
          <span className="Player__stats-value">
            {(SkyWars.kills / SkyWars.deaths).toFixed(2)}
          </span>
        </li>

        <li>
          <span className="Player__stats-text">Assists: </span>
          <span className="Player__stats-value">{SkyWars.assists}</span>
        </li>

        <li>
          <span className="Player__stats-text">Kills/Game: </span>
          <span className="Player__stats-value">
            {(SkyWars.kills / SkyWars.games_played_skywars).toFixed(2)}
          </span>
        </li>
      </ul>
    </div>
  );
}
