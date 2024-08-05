export function extractTime(dateString) {
  const date = new Date(dateString);
  let hours = padZero(date.getHours());
  const minutes = padZero(date.getMinutes());
  const ampm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  const paddedHours = padZero(hours);

  return `${paddedHours}:${minutes} ${ampm}`;
}
// Helper function to pad single-digit numbers with a leading zero
function padZero(number) {
  return number.toString().padStart(2, "0");
}
