// helper function to calculate network level with the provided total network exp
function getNetworkLevelbyNetworkExp(networkExp) {
  return (Math.sqrt(2 * networkExp + 30625) / 50 - 2.5).toFixed(2);
}

// helper function to get total of completed quests by iterating every props in "quests" props and summing the length of each props.completions
function getTotalQuestsCompletion(questsObject) {
  if (questsObject === null) return 0;
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
  if (challengesObject === null) return 0;
  return Object.entries(challengesObject.all_time).reduce(
    (sum, curr) => (sum += curr[1]),
    0
  );
}

// function to calculate the time gap between 2 points of time in Millisecond (converts it to abstracted text eg. "2 months", "1 year", etc...)
function getTimeGap(date, currentDate) {
  if (date === null) return "N/A";
  console.log(date, currentDate);

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
      gap = result;
      break;
    }
    gap = result;
  }

  if (gap > 1)
    return `${gap.toFixed(1)} ${gap.toFixed(1) > 1 ? "years" : "year"}`;
  return text;
}

function getPlayerDataFromSessionStorage(key) {
  return JSON.parse(sessionStorage.getItem(key));
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
  let timeConverted = 1;
  let time = timePlayed;

  for (let [timeType, converter] of converters) {
    const result = time / converter;
    if (result < 1) {
      text = `${Math.round(time)}${timeType}`;
      timeConverted *= Math.round(time);
      time = result;
      break;
    }
    timeConverted *= converter;
    time = result;
  }
  if (time > 1) {
    timeConverted = (timeConverted / 30) * (time * 30).toFixed(0);
    text = `${(time * 30).toFixed(0)}d`;
  }
  if (text.includes("s")) return text;
  time = timePlayed - timeConverted;
  console.log(time);

  for (let [timeType, converter] of converters) {
    const result = time / converter;
    if (result < 1) {
      text += ` ${Math.round(time)}${timeType}`;
      time = result;
      break;
    }
    time = result;
  }

  return text;
}

export {
  getNetworkLevelbyNetworkExp,
  getTotalQuestsCompletion,
  getTotalChallenges,
  getTimeGap,
  getPlayerDataFromSessionStorage,
  calculatePlaytime,
};
