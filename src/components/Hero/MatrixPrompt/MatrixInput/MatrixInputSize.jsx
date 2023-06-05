import React from "react";
import "./input.css";

export default function MatrixInputSize({ setMatrixSize }) {
  return (
    <form>
      <label>Matrix Size: </label>
      <input
        className="num-input"
        type="number"
        defaultValue={2}
        min={1}
        onChange={(e) => {
          //   const sizeInput = sizeInput != null ?? parseInt(e.target.value);
          const sizeInput = parseInt(e.target.value);
          if (sizeInput !== 0) {
            setMatrixSize((prevSize) => ({
              ...prevSize,
              rows: sizeInput,
            }));
          }
        }}
      />
      <span>X</span>
      <input
        className="num-input"
        type="number"
        defaultValue={2}
        min={1}
        onChange={(e) => {
          //   const sizeInput = sizeInput != null ?? parseInt(e.target.value);
          const sizeInput = parseInt(e.target.value);
          if (sizeInput > 0) {
            setMatrixSize((prevSize) => ({
              ...prevSize,
              columns: sizeInput,
            }));
          }
        }}
      />
    </form>
  );
}
