import React, { useEffect } from "react";
import "./input.css";

export default function MatrixInput({ matrixSize, setMatrix, matrix }) {
  let currentMatrix = Array(matrixSize.rows);
  for (let r = 0; r < matrixSize.rows; r++) {
    currentMatrix[r] = [];
    for (let c = 0; c < matrixSize.columns; c++) {
      currentMatrix[r][c] = matrix[r][c] !== undefined ? matrix[r][c] : 0;
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

  // useEffect(() => {
  //   let count = 0;
  //   for (let i = 0; i < matrixSize.rows; i++) {
  //     for (let j = 0; j < matrixSize.columns; j++) {
  //       // If the floating point number cannot be parsed, we set 0 for this value
  //       currentMatrix[i][j] = !isNaN(parseFloat(event.target[count].value)) ? parseFloat(event.target[count].value) : 0;
  //       count += 1;
  //     }
  //   }
  //   setMatrix(currentMatrix);
  // }, [matrixSize]);

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
