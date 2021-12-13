var get = require("lodash.get");

export const formatData = (data) => {
  return {
    playerHead: get(data, "playerHead", ""),
    displayname: get(data, "displayname", "N/A"),
    networkExp: get(data, "networkExp", 0),
    karma: get(data, "karma", 0),
    achievementPoints: get(data, "achievementPoints", 0),
    quests: get(data, "quests", null),
    challenges: get(data, "challenges", null),
    friends: get(data, "friends", []),
    session: {
      online: get(data, "session.online", false),
    },
    firstLogin: get(data, "firstLogin", null),
    lastLogin: get(data, "lastLogin", null),
    guild: {
      name: get(data, "guild.name", "N/A"),
      player: {
        rank: get(data, "guild.members")
          ? data.guild.members.find((member) => member.uuid === data.uuid).rank
          : "N/A",
      },
    },
    stats: {
      Bedwars: {
        Experience: get(data, "stats.Bedwars.Experience", 0),
        beds_broken_bedwars: get(data, "stats.Bedwars.beds_broken_bedwars", 0),
        beds_lost_bedwars: get(data, "stats.Bedwars.beds_lost_bedwars", 0),
        bedwars_boxes: get(data, "stats.Bedwars.bedwars_boxes", 0),
        bedwars_christmas_boxes: get(
          data,
          "stats.Bedwars.bedwars_christmas_boxes",
          0
        ),
        bedwars_easter_boxes: get(
          data,
          "stats.Bedwars.bedwars_easter_boxes",
          0
        ),
        bedwars_halloween_boxes: get(
          data,
          "stats.Bedwars.bedwars_halloween_boxes",
          0
        ),
        coins: get(data, "stats.Bedwars.coins", 0),
        deaths_bedwars: get(data, "stats.Bedwars.deaths_bedwars", 0),
        final_deaths_bedwars: get(
          data,
          "stats.Bedwars.final_deaths_bedwars",
          0
        ),
        final_kills_bedwars: get(data, "stats.Bedwars.final_kills_bedwars", 0),
        games_played_bedwars: get(
          data,
          "stats.Bedwars.games_played_bedwars",
          0
        ),
        kills_bedwars: get(data, "stats.Bedwars.kills_bedwars", 0),
        losses_bedwars: get(data, "stats.Bedwars.losses_bedwars", 0),
        wins_bedwars: get(data, "stats.Bedwars.wins_bedwars", 0),
        winstreak: get(data, "stats.Bedwars.winstreak", 0),
      },
      SkyWars: {
        assists: get(data, "stats.SkyWars.assists", 0),
        coins: get(data, "stats.SkyWars.coins", 0),
        cosmetic_tokens: get(data, "stats.SkyWars.cosmetic_tokens", 0),
        deaths: get(data, "stats.SkyWars.deaths", 0),
        heads: get(data, "stats.SkyWars.heads", 0),
        kills: get(data, "stats.SkyWars.kills", 0),
        levelFormatted: get(data, "stats.SkyWars.levelFormatted", "&&1⋆"),
        losses: get(data, "stats.SkyWars.losses", 0),
        opals: get(data, "stats.SkyWars.opals", 0),
        shard: get(data, "stats.SkyWars.shard", 0),
        souls: get(data, "stats.SkyWars.souls", 0),
        time_played: get(data, "stats.SkyWars.time_played", 0),
        wins: get(data, "stats.SkyWars.wins", 0),
      },
    },
  };
};
