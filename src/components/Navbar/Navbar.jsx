import React from "react";
import "./navbar.css";

export default function Navbar() {
	return (
		<nav className="navbar">
			<ul>
				<li>Addition, Subtraction</li>
				<li>Multiplication</li>
				<li>K-Multiplication</li>
				<li className="selected">Transpose</li>
				<li>Determinant</li>
				<li>Cramer's Rule</li>
				<li>REF/RREF</li>
			</ul>
		</nav>
	);
}
