const { NotImplementedError } = require("../extensions/index.js");

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  if (!matrix || matrix.length === 0) {
    throw new Error("Invalid matrix");
  }

  const numRows = matrix.length;
  const numCols = matrix[0].length;
  const result = Array.from({ length: numRows }, () =>
    Array.from({ length: numCols }, () => 0)
  );

  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < numCols; j++) {
      if (matrix[i][j]) {
        result[i][j] = 1;
      } else {
        for (let row = i - 1; row <= i + 1; row++) {
          for (let col = j - 1; col <= j + 1; col++) {
            if (
              row >= 0 &&
              row < numRows &&
              col >= 0 &&
              col < numCols &&
              !(row === i && col === j)
            ) {
              if (matrix[row][col]) {
                result[i][j]++;
              }
            }
          }
        }
      }
    }
  }

  return result;
}

module.exports = {
  minesweeper,
};
