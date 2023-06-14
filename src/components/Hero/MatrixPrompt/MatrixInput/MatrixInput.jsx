import React from "react";
import "./input.css";

export default function MatrixInput({ matrixSize, setMatrix }) {
  let currentMatrix = Array(matrixSize.rows);
  for (let r = 0; r < matrixSize.rows; r++) {
    currentMatrix[r] = new Array(matrixSize.columns).fill(0);
  }

  const handleChange = (event) => {
    event.preventDefault();
    let count = 0;
    for (let r = 0; r < matrixSize.rows; r++) {
      for (let c = 0; c < matrixSize.columns; c++) {
        // If the floating point number cannot be parsed, we set 0 for this value
        currentMatrix[r][c] = !isNaN(parseFloat(event.target[count].value))
          ? parseFloat(event.target[count].value)
          : 0;
        count += 1;
      }
    }
    console.log("Current matrix");
    console.log(currentMatrix);
    setMatrix(currentMatrix);
  };

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
