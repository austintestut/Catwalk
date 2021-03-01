const dateFormatter = (string) => {
  const months = {
    '01': 'January',
    '02': 'February',
    '03': 'March',
    '04': 'April',
    '05': 'May',
    '06': 'June',
    '07': 'July',
    '08': 'August',
    '09': 'September',
    '10': 'October',
    '11': 'November',
    '12': 'December'
  };
  const month = months[string.substring(5, 7)];
  const year = string.substring(0, 4);
  const day = string.substring(8, 10);
  const finalDate = `${month} ${day}, ${year}`;

  return finalDate;
}

export default dateFormatter;
