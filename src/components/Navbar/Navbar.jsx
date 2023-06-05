import React, { useState } from "react";
import "./navbar.css";

export const OPERATION_LIST = [
	{ id: "add", title: "Addition" },
	{ id: "subtract", title: "Subtraction" },
	{ id: "multiplication", title: "Multiplication" },
	{ id: "k-multiplication", title: "K-Multiplication" },
	{ id: "transpose", title: "Transpose" },
	{ id: "determinant", title: "Determinant" },
	{ id: "cramers", title: "Cramer's Rule" },
	{ id: "ref-rref", title: "REF/RREF" },
];

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
