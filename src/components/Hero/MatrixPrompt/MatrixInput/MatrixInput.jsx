import React, { useEffect } from "react";
import "./input.css";

export default function MatrixInput({ matrixSize, setMatrix, matrix }) {
  // Create new array that can be mutable whenever the matrix dimensions change.
  let currentMatrix = Array(matrixSize.rows);
  // Copy from the previous matrix state except when some rows or entries are undefined.
  for (let r = 0; r < matrixSize.rows; r++) {
    currentMatrix[r] = [];
    for (let c = 0; c < matrixSize.columns; c++) {
      if (matrix[r] !== undefined) {
        currentMatrix[r][c] = matrix[r][c] ?? 0;
      } else {
        currentMatrix[r][c] = 0;
      }
    }
  }

  const handleChange = (event) => {
    event.preventDefault();
    // let count = 0;
    // for (let r = 0; r < matrixSize.rows; r++) {
    //   for (let c = 0; c < matrixSize.columns; c++) {
    //     console.log(event.target[count]);
    //     // If the floating point number cannot be parsed, we set 0 for this value
    //     currentMatrix[r][c] = !isNaN(parseFloat(event.target?.value))
    //       ? parseFloat(event.target.value)
    //       : 0;
    //     count += 1;
    //   }
    // }
    console.log(event.target);
    // Destructure the array obtained from the name. For example, [0, 0] will be row = 0, col = 0.
    const [row, col] = event.target.name.split(",");
    currentMatrix[row][col] = !isNaN(parseFloat(event.target.value))
      ? parseFloat(event.target.value)
      : 0;
    console.log("Current matrix");
    console.log(currentMatrix);
    setMatrix(currentMatrix);
  };

  // Call useEffect hook whenever matrixSize changes, updating the matrix state with its new dimensions before even making
  // changes to it.
  useEffect(() => {
    for (let r = 0; r < matrixSize.rows; r++) {
      currentMatrix[r] = [];
      for (let c = 0; c < matrixSize.columns; c++) {
        if (matrix[r] !== undefined) {
          currentMatrix[r][c] = matrix[r][c] ?? 0;
        } else {
          currentMatrix[r][c] = 0;
        }
      }
    }
    console.log("Current matrix");
    console.log(currentMatrix);
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
