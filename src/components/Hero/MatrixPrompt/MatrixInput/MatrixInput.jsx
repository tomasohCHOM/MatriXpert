import React from "react";
import "./input.css";

export default function MatrixInput({ matrixSize, setMatrix, formId }) {
  let currentMatrix = Array(matrixSize.rows);
  for (let r = 0; r < matrixSize.rows; r++) {
    currentMatrix[r] = new Array(matrixSize.columns).fill(0);
  }

  const handleSubmit = (event) => {
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
    setMatrix(currentMatrix);
  };

  return (
    <form id={formId} className="form-input" onSubmit={handleSubmit}>
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
                />
              );
            })}
          </div>
        );
      })}
    </form>
  );
}
