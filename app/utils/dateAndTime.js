/**
 * Expands abbreviated month names to full names (e.g., Mar -> March)
 */
const MONTH_ABBREV_TO_FULL = {
  Jan: "January",
  Feb: "February",
  Mar: "March",
  Apr: "April",
  May: "May",
  Jun: "June",
  Jul: "July",
  Aug: "August",
  Sep: "September",
  Sept: "September",
  Oct: "October",
  Nov: "November",
  Dec: "December",
};

function expandMonthAbbreviations(str) {
  if (!str || typeof str !== "string") return str;
  let result = str;
  for (const [abbrev, full] of Object.entries(MONTH_ABBREV_TO_FULL)) {
    const regex = new RegExp(`\\b${abbrev}\\.?\\b`, "g");
    result = result.replace(regex, full);
  }
  return result;
}

/**
 * Parses a dateAndTime string (e.g., "March 5, 2026 at 2:00PM ET" or "Mar 5 @ 2:00PM")
 * Splits on " at " or " @ " to separate date and time.
 * Expands abbreviated months to full names.
 * @returns {{ date: string, time: string } | null} Parsed date and time, or null if empty
 */
export function parseDateAndTime(dateAndTime) {
  if (!dateAndTime || typeof dateAndTime !== "string") {
    return null;
  }
  const trimmed = dateAndTime.trim();
  if (!trimmed) return null;

  const parts = trimmed.split(/\s+at\s+|\s+@\s+/i);
  if (parts.length >= 2) {
    const datePart = expandMonthAbbreviations(parts[0].trim());
    const timePart = parts.slice(1).join(" ").trim();
    return { date: datePart, time: timePart };
  }

  return { date: expandMonthAbbreviations(trimmed), time: trimmed };
}
