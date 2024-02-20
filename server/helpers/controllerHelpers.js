function dateSplitter(date){
  const dateParts = date.split('-');
  const day = dateParts[0];
  const month = `${dateParts[1]}-${dateParts[2]}`;
  return[day, month];
}

module.exports = { dateSplitter }