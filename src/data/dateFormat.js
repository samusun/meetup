const today = new Date();

function correctFormat(input) {
  let monthOrDate;
  if (input.toString().length === 1) {
    monthOrDate = `${0}${input}`;
    return monthOrDate;
  }
  return input;
}

export const correctDate =
  today.getFullYear() +
  '' +
  correctFormat(today.getMonth() + 1) +
  '' +
  correctFormat(today.getDate());
