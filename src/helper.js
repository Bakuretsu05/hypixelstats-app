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
  return Object.entries(challengesObject.all_time).reduce(
    (sum, curr) => (sum += curr[1]),
    0
  );
}

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

  // text initialized to year (s -> y = /31104000)
  let text = `${Math.round(gap / 31104000)} ${
    Math.round(gap / 31104000) > 1 ? "years" : "year"
  }`;

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

export {
  getNetworkLevelbyNetworkExp,
  getTotalQuestsCompletion,
  getTotalChallenges,
  getTimeGap,
};
