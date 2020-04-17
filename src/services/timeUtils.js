export const isToday = (someDate) => {
  const date = new Date(someDate);
  const today = new Date();
  return (
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
  );
};

export const getTimeToNextTurn = (turn, turnTimes) => {
  if (turn.startDate && Date.parse(turn.startDate) > Date.now()) {
    return turn.startDate;
  }

  const date = new Date();
  const utcHours = date.getUTCHours();

  var hours = 0;
  var minutes = 0;

  var times = turnTimes.split(",");
  times.push(Number(times[0]) + 24);

  for (let i = 0; i < times.length; i++) {
    if (utcHours < Number(times[i])) {
      hours = Number(times[i]) - utcHours - 1;
      break;
    }
  }

  minutes = 60 - date.getMinutes();

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  return hours + "h " + minutes + "m";
};
