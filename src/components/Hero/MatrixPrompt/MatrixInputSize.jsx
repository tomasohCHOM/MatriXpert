import React from "react";
import "./matrixinputsize.css";

export default function MatrixInputSize({ setMatrixSize }) {
  return (
    <form>
      <label>Matrix Size</label>
      <input
        className="input-size"
        type="number"
        defaultValue={2}
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
      <input
        className="input-size"
        type="number"
        defaultValue={2}
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
