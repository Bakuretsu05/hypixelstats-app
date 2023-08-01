import React, { useMemo } from "react";
import { useGlobalContext } from "../context";
import {
    getNetworkLevelbyNetworkExp,
    getTotalQuestsCompletion,
    getTotalChallenges,
    getTimeGap,
} from "../helper";
import "./PlayerInfo.css";
import StatsCard from "./StatsCard";

export default function PlayerInfo() {
    const { playerData } = useGlobalContext();

    const stats = useMemo(() => {
        return [
            {
                title: "General",
                stats: [
                    {
                        text: "Level",
                        value: getNetworkLevelbyNetworkExp(
                            playerData.networkExp
                        ),
                    },
                    {
                        text: "Karma",
                        value: playerData.karma,
                    },
                    {
                        text: "AP",
                        value: playerData.achievementPoints,
                    },
                    {
                        text: "Quests",
                        value: getTotalQuestsCompletion(playerData.quests),
                    },
                    {
                        text: "Challenges",
                        value: getTotalChallenges(playerData.challenges),
                    },
                ],
            },
            {
                title: "Status",
                stats: [
                    {
                        text: "Status",
                        value: playerData.session.online ? "Online" : "Offline",
                    },
                    {
                        text: "First Login",
                        value:
                            getTimeGap(
                                playerData.firstLogin,
                                new Date().getTime()
                            ) + " ago",
                    },
                    {
                        text: "Last Login",
                        value:
                            getTimeGap(
                                playerData.lastLogin,
                                new Date().getTime()
                            ) + " ago",
                    },
                ],
            },
            {
                title: "Guild",
                stats: [
                    {
                        text: "Name",
                        value: playerData.guild.name,
                    },
                    {
                        text: "Rank",
                        value: playerData.guild.player.rank,
                    },
                ],
            },
        ];
    }, [playerData]);

    return (
        <div className="PlayerInfo">
            <header className="PlayerInfo__player">
                <img
                    className="PlayerInfo__player-head"
                    src={playerData.playerHead}
                    alt="Player Avatar"
                />
                <h2 className="PlayerInfo__player-name">
                    {playerData.displayname}
                </h2>
            </header>
            <main className="PlayerInfo__stats">
                {stats.map((stat) => (
                    <StatsCard key={stat.title} {...stat} />
                ))}
            </main>
        </div>
    );
}
