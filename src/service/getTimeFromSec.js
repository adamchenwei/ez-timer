export default function getTimeFromSec(totalSeconds = 0) {
  if (!totalSeconds) {
    return {
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds - (hours * 3600)) / 60);
  let seconds = totalSeconds - (hours * 3600) - (minutes * 60);
  // round seconds
  seconds = Math.round(seconds * 100) / 100;
  return {
    hours: (hours < 10 ? 0 + hours : hours),
    minutes: (minutes < 10 ? 0 + minutes : minutes),
    seconds: (seconds < 10 ? 0 + seconds : seconds),
  };
}
