export const getCurDate = () => {
  const currentDate = new Date();
  const day = String(currentDate.getDate()).padStart(2, '0'); // Add leading zero if necessary
  const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Add leading zero if necessary
  const year = currentDate.getFullYear();
  return `${day}-${month}-${year}`;
};
