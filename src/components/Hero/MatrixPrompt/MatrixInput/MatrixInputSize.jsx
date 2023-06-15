import React, { useState } from "react";
import "./input.css";

export default function MatrixInputSize({ setMatrixSize }) {
  const handleChange = (e) => {
    const sizeInput = parseInt(e.target.value) ?? 0;
    if (sizeInput > 0) {
      e.target.name === "rows-input"
        ? setMatrixSize((prevSize) => ({
            ...prevSize,
            rows: sizeInput,
          }))
        : setMatrixSize((prevSize) => ({
            ...prevSize,
            columns: sizeInput,
          }));
    }
  };

  return (
    <form>
      <label>Matrix Size: </label>
      <input
        name="rows-input"
        className="num-input"
        type="number"
        defaultValue={2}
        min={1}
        onChange={handleChange}
      />
      <span>X</span>
      <input
        name="columns-input"
        className="num-input"
        type="number"
        defaultValue={2}
        min={1}
        onChange={handleChange}
      />
    </form>
  );
}
