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
    for (let i = 0; i < matrixSize.rows; i++) {
      for (let j = 0; j < matrixSize.columns; j++) {
        // If the floating point number cannot be parsed, we set 0 for this value
        matrix[i][j] = !isNaN(parseFloat(event.target[count].value))
          ? parseFloat(event.target[count].value)
          : 0;
        count += 1;
      }
    }
    setMatrix(matrix);
  };

  return (
    <form onSubmit={handleSubmit}>
      {matrix.map((row, indexRow = 1) => {
        return (
          <div className="flex-container" key={indexRow}>
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
      <button className="input-submit">{"Save Matrix"}</button>
    </form>
  );
}
