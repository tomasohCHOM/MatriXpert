import React, { useState } from "react";
import { OPERATION_LIST } from "../../utils/matrixCalculations";
import "./navbar.css";

export default function Navbar({ operation, setOperation }) {
  const handleOperationSelected = (selectedOperation) => {
    setOperation(selectedOperation);
  };

  return (
    <nav className="navbar">
      <ul>
        {OPERATION_LIST.map((selectedOperation) => {
          return (
            <li
              onClick={() => handleOperationSelected(selectedOperation)}
              key={selectedOperation.id}
              className={selectedOperation.id === operation.id ? "selected" : ""}
            >
              {selectedOperation.title}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
