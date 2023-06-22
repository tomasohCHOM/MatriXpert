import React, { useState } from "react";
import "./input.css";

export default function MatrixInputSize({ setMatrixSize }) {
  const [cursor, setCursor] = useState(0);

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

  const handleKeyDown = (e) => {
    let currentCursor = 0;
    if (e.key === "ArrowLeft") {
      currentCursor = 0;
      setCursor(currentCursor);
    } else if (e.key === "ArrowRight") {
      currentCursor = 1;
      setCursor(currentCursor);
    }
  }

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
        onKeyDown={handleKeyDown}
      />
      <span>X</span>
      <input
        name="columns-input"
        className="num-input"
        type="number"
        defaultValue={2}
        min={1}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    </form>
  );
}
