// helper function to calculate network level with the provided total network exp
function getNetworkLevelbyNetworkExp(networkExp) {
  return (Math.sqrt(2 * networkExp + 30625) / 50 - 2.5).toFixed(2);
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
  if (!challengesObject) return null;
  return Object.entries(challengesObject.all_time).reduce(
    (sum, curr) => (sum += curr[1]),
    0
  );
}

// function to calculate the time gap between 2 points of time in Millisecond (converts it to abstracted text eg. "2 months ago", "1 year ago", etc...)
// ! : Fix bug where it displays NaN for big number (technoblade last login 52 years)
function getTimeGap(date, currentDate) {
  // [(s -> m), (m -> h), (h -> d), (d -> month), (month -> year)]
  const converters = [
    ["second", 60],
    ["minute", 60],
    ["hour", 24],
    ["day", 30],
    ["month", 12],
  ];

  let gap = Math.round((currentDate - date) / 1000); // gap initialized in second
  let text;

  for (let [timeType, converter] of converters) {
    const result = gap / converter;
    if (result < 1) {
      text = `${Math.round(gap)} ${
        Math.round(gap) > 1 ? timeType + "s" : timeType
      }`;
      break;
    }
    gap = result;
  }

  return text;
}

function getPlayerDataFromSessionStorage(key) {
  return JSON.parse(sessionStorage.getItem(key));
}

/* ================
      BEDWARS 
=====================*/
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

/* ================
      SKYWARS 
=====================*/

// timePlayed = (second)
function calculatePlaytime(timePlayed) {
  const converters = [
    ["s", 60],
    ["m", 60],
    ["h", 24],
    ["d", 30],
  ];

  let text;

  for (let [timeType, converter] of converters) {
    const result = timePlayed / converter;
    if (result < 1) {
      text = `${Math.round(timePlayed)}${timeType}`;
      break;
    }
    timePlayed = result;
  }

  for (let [timeType, converter] of converters) {
    const result = timePlayed / converter;
    if (result < 1) {
      text += ` ${Math.round(timePlayed)}${timeType}`;
      break;
    }
    timePlayed = result;
  }

  return text;
}

export {
  getNetworkLevelbyNetworkExp,
  getTotalQuestsCompletion,
  getTotalChallenges,
  getTimeGap,
  getPlayerDataFromSessionStorage,
  getBedwarsStarsByExp,
  calculatePlaytime,
};
