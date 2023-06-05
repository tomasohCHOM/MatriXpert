import React, { useState } from "react";
import { OPERATION_LIST } from "../Hero/Hero";
import "./navbar.css";

export default function Navbar() {
  const [selected, setSelected] = useState(OPERATION_LIST[4].id);

  const handleOperationSelected = (operation) => {
    setSelected(operation.id);
  };

  return (
    <nav className="navbar">
      <ul>
        {OPERATION_LIST.map((operation) => {
          return (
            <li
              onClick={() => handleOperationSelected(operation)}
              key={operation.id}
              className={operation.id === selected ? "selected" : ""}
            >
              {operation.title}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
