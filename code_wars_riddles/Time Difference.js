function periodIsLate(last, today, cycleLength) {
  let timeDifference = today - last;
  let daysDifference = timeDifference  / (1000 * 3600 * 24);
  console.log(daysDifference);
  if (daysDifference > cycleLength) {
    return true;
  }
  return false;
  
}

console.log(periodIsLate(new Date(2016, 7, 12), new Date(2016, 8, 9), 28));