import React from "react";
import { useGlobalContext } from "../../context";
import "../../routes/PlayerStats.css";

// helper function to calculate bedwars stars by total bedwars experience
function getBedwarsStarsByExp(exp) {
  const BEDWARS_EXP_PER_PRESTIGE = 489000;
  const BEDWARS_LEVELS_PER_PRESTIGE = 100;

  let prestige = exp / BEDWARS_EXP_PER_PRESTIGE;
  exp = exp % BEDWARS_EXP_PER_PRESTIGE;
  if (prestige > 5) {
    let over = prestige % 5;
    exp += over * BEDWARS_EXP_PER_PRESTIGE;
    prestige -= over;
  }

  // first few levels are different
  if (exp < 500) {
    return 0 + prestige * BEDWARS_LEVELS_PER_PRESTIGE;
  } else if (exp < 1500) {
    return 1 + prestige * BEDWARS_LEVELS_PER_PRESTIGE;
  } else if (exp < 3500) {
    return 2 + prestige * BEDWARS_LEVELS_PER_PRESTIGE;
  } else if (exp < 5500) {
    return 3 + prestige * BEDWARS_LEVELS_PER_PRESTIGE;
  } else if (exp < 9000) {
    return 4 + prestige * BEDWARS_LEVELS_PER_PRESTIGE;
  }
  exp -= 9000;

  return Math.floor(exp / 5000 + 4 + prestige * BEDWARS_LEVELS_PER_PRESTIGE);
}

export default function BedwarsCard() {
  const { playerData } = useGlobalContext();
  const { Bedwars } = playerData.stats;

  return (
    <div className="BedwarsCard --stats-card">
      <h3 className="PlayerStats__title">Bedwars Card</h3>

      <ul className="PlayerStats__stats-list">
        <li>
          <span className="PlayerStats__stats-text">Star: </span>
          <span className="PlayerStats__stats-value">
            {getBedwarsStarsByExp(Bedwars.Experience)}*
          </span>
        </li>

        <li>
          <span className="PlayerStats__stats-text">Winstreak: </span>
          <span className="PlayerStats__stats-value">{Bedwars.winstreak}</span>
        </li>

        <li>
          <span className="PlayerStats__stats-text">Wins: </span>
          <span className="PlayerStats__stats-value">
            {Bedwars.wins_bedwars}
          </span>
        </li>

        <li>
          <span className="PlayerStats__stats-text">Losses: </span>
          <span className="PlayerStats__stats-value">
            {Bedwars.losses_bedwars}
          </span>
        </li>

        <li>
          <span className="PlayerStats__stats-text">WLR: </span>
          <span className="PlayerStats__stats-value">
            {(Bedwars.wins_bedwars / Bedwars.losses_bedwars).toFixed(2)}
          </span>
        </li>

        <li>
          <span className="PlayerStats__stats-text">Final Kills: </span>
          <span className="PlayerStats__stats-value">
            {Bedwars.final_kills_bedwars}
          </span>
        </li>

        <li>
          <span className="PlayerStats__stats-text">Final Deaths: </span>
          <span className="PlayerStats__stats-value">
            {Bedwars.final_deaths_bedwars}
          </span>
        </li>

        <li>
          <span className="PlayerStats__stats-text">FKDR: </span>
          <span className="PlayerStats__stats-value">
            {(
              Bedwars.final_kills_bedwars / Bedwars.final_deaths_bedwars
            ).toFixed(2)}
          </span>
        </li>

        <li>
          <span className="PlayerStats__stats-text">Beds Broken: </span>
          <span className="PlayerStats__stats-value">
            {Bedwars.beds_broken_bedwars}
          </span>
        </li>

        <li>
          <span className="PlayerStats__stats-text">Beds Lost: </span>
          <span className="PlayerStats__stats-value">
            {Bedwars.beds_lost_bedwars}
          </span>
        </li>

        <li>
          <span className="PlayerStats__stats-text">BBLR: </span>
          <span className="PlayerStats__stats-value">
            {(Bedwars.beds_broken_bedwars / Bedwars.beds_lost_bedwars).toFixed(
              2
            )}
          </span>
        </li>
      </ul>
    </div>
  );
}
