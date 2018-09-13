export default function getSecFromTime(hours = 0, minutes = 0, seconds = 0) {
  return (hours * 3600) + (minutes * 60) + seconds;
}
