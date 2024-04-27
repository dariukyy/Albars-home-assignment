export function isFutureDate(inputDateString: string): boolean {
  const inputDate = new Date(inputDateString);
  const currentDate = new Date();
  currentDate.setHours(0, 0, 0, 0);
  inputDate.setHours(0, 0, 0, 0);
  return inputDate > currentDate;
}

export function convertDateFormat(inputDate: string): string {
  const date = new Date(inputDate);
  const year = date.getFullYear();
  const month = ("0" + (date.getMonth() + 1)).slice(-2);
  const day = ("0" + date.getDate()).slice(-2);

  return `${year}-${month}-${day}`;
}
