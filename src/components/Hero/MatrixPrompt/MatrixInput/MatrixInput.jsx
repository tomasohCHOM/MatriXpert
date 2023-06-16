import React, { useEffect } from "react";
import "./input.css";

const getEntriesFromMatrix = (rows, columns, matrix) => {
  let result = [];
  // Copy from the previous matrix state except when some rows or entries are undefined.
  for (let r = 0; r < rows; r++) {
    result[r] = [];
    for (let c = 0; c < columns; c++) {
      result[r][c] = matrix[r] !== undefined ? matrix[r][c] ?? 0 : 0;
    }
  }
  return result;
};

export default function MatrixInput({ matrixSize, setMatrix, matrix }) {
  // Create new array that can be mutable whenever the matrix dimensions change.
  let currentMatrix = Array(matrixSize.rows);
  currentMatrix = getEntriesFromMatrix(
    matrixSize.rows,
    matrixSize.columns,
    matrix
  );

  const handleChange = (event) => {
    event.preventDefault();
    // Destructure the array obtained from the name. For example, [0, 0] will be row = 0, col = 0.
    const [row, col] = event.target.name.split(",");
    // Check whether the input entry was a number. If not, default to 0
    currentMatrix[row][col] = !isNaN(parseFloat(event.target.value))
      ? parseFloat(event.target.value)
      : 0;
    setMatrix(currentMatrix);
  };

  // Call useEffect hook whenever matrixSize changes, updating the matrix state with its new dimensions before even making
  // changes to it.
  useEffect(() => {
    currentMatrix = getEntriesFromMatrix(
      matrixSize.rows,
      matrixSize.columns,
      matrix
    );
    setMatrix(currentMatrix);
  }, [matrixSize]);

  return (
    <form className="form-input">
      {currentMatrix.map((row, indexRow = 1) => {
        return (
          <div key={indexRow}>
            {row.map((item, indexColumn = 1) => {
              return (
                <input
                  className="num-input matrix-entry"
                  key={indexRow + " " + indexColumn}
                  type="text"
                  defaultValue={0}
                  name={indexRow + "," + indexColumn}
                  onChange={handleChange}
                />
              );
            })}
          </div>
        );
      })}
    </form>
  );
}
