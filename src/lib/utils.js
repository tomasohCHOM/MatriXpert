// Generates a random matrix of size 4x4 with entries between 0-10
export const generateRandomMatrix = (numRows, numCols) => {
  let result = [];

  for (let r = 0; r < numRows; r++) {
    result[r] = [];
    for (let c = 0; c < numCols; c++) {
      const randomEntry = Math.floor(Math.random() * 11);
      result[r][c] = randomEntry;
    }
  }
  return result;
}