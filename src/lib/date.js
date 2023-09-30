export function getCurrentDateTime() {
  // Create a new Date object to get the current date and time
  const currentDate = new Date();

  // Define an array of month names
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Get the day, month, and year
  const day = currentDate.getDate();
  const monthIndex = currentDate.getMonth(); // Note: Months are zero-based
  const year = currentDate.getFullYear();

  // Get the hours, minutes, and seconds
  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  const seconds = currentDate.getSeconds();

  // Format the date and time as text
  const formattedDateTime = `${months[monthIndex]} ${day}, ${year} ${hours}:${minutes}:${seconds}`;

  return formattedDateTime;
}
