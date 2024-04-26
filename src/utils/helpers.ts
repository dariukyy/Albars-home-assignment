export function isFutureDate(inputDateString: string): boolean {
  const inputDate = new Date(inputDateString);
  const currentDate = new Date();
  // Remove time part from the date as we are only comparing the date
  currentDate.setHours(0, 0, 0, 0);
  inputDate.setHours(0, 0, 0, 0);
  return inputDate > currentDate;
}
