import React from "react";
import "./input.css";

export default function MatrixInput({ matrixSize, setMatrix }) {
  let matrix = Array(matrixSize.rows);
  for (let r = 0; r < matrixSize.rows; r++) {
    matrix[r] = new Array(matrixSize.columns).fill(0);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    let count = 0;
    for (let r = 0; r < matrixSize.rows; r++) {
      for (let c = 0; c < matrixSize.columns; c++) {
        // If the floating point number cannot be parsed, we set 0 for this value
        matrix[r][c] = !isNaN(parseFloat(event.target[count].value))
          ? parseFloat(event.target[count].value)
          : 0;
        count += 1;
      }
    }
    setMatrix(matrix);
  };

  return (
    <form id="input-form" className="form-input" onSubmit={handleSubmit}>
      {matrix.map((row, indexRow = 1) => {
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
