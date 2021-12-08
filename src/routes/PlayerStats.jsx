import React from "react";
import { Outlet, useNavigate } from "react-router";
import "./PlayerStats.css";
import { useGlobalContext } from "../context";

// helper function to calculate network level with the provided total network exp
function getNetworkLevelbyNetworkExp(networkExp) {
  return Math.floor(Math.sqrt(2 * networkExp + 30625) / 50 - 2.5);
}

// helper function to get total of completed quests by iterating every props in "quests" props and summing the length of each props.completions
function getTotalQuestsCompletion(questsObject) {
  return Object.entries(questsObject).reduce((totalQuests, quest) => {
    if (quest[1].completions) {
      return (totalQuests += quest[1].completions.length);
    } else {
      return totalQuests;
    }
  }, 0);
}

// helper function to calculate total of challenges completed
function getTotalChallenges(challengesObject) {
  return Object.entries(challengesObject.all_time).reduce(
    (sum, curr) => (sum += curr[1]),
    0
  );
}

export default function PlayerStats() {
  const { playerData } = useGlobalContext();
  const navigate = useNavigate();

  return (
    playerData && (
      <div className="PlayerStats">
        <div className="PlayerStats__player">
          <img
            className="PlayerStats__player-head"
            src={playerData.playerHead}
            alt="player head avatar"
          />
          <h3 className="PlayerStats__title">{`[${playerData.newPackageRank}] ${playerData.displayname}`}</h3>
        </div>
        <div className="PlayerStats__general-stats">
          <ul className="PlayerStats__stats-list">
            <li>
              <span className="PlayerStats__stats-text">Level: </span>
              <span className="PlayerStats__stats-value">
                {getNetworkLevelbyNetworkExp(playerData.networkExp)}
              </span>
            </li>

            <li>
              <span className="PlayerStats__stats-text">AP: </span>
              <span className="PlayerStats__stats-value">
                {playerData.achievementPoints}
              </span>
            </li>

            <li>
              <span className="PlayerStats__stats-text">Karma: </span>
              <span className="PlayerStats__stats-value">
                {playerData.karma}
              </span>
            </li>

            <li>
              <span className="PlayerStats__stats-text">Quests: </span>
              <span className="PlayerStats__stats-value">
                {getTotalQuestsCompletion(playerData.quests)}
              </span>
            </li>

            <li>
              <span className="PlayerStats__stats-text">Challenges: </span>
              <span className="PlayerStats__stats-value">
                {getTotalChallenges(playerData.challenges)}
              </span>
            </li>

            <li>
              <span className="PlayerStats__stats-text">Friends: </span>
              <span className="PlayerStats__stats-value">
                {playerData.friends.length}
              </span>
            </li>
          </ul>
        </div>
        <div className="PlayerStats__stats">
          <select>
            <option> -- Choose a gamemode -- </option>
            <option value="bedwars" onClick={(e) => navigate(e.target.value)}>
              Bedwars
            </option>
            <option value="skywars" onClick={(e) => navigate(e.target.value)}>
              Skywars
            </option>
          </select>
          <Outlet />
        </div>
      </div>
    )
  );
}
