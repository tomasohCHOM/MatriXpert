import React from "react";
import { useState } from "react";
import "./hero.css";
import MatrixPrompt from "./MatrixPrompt/MatrixPrompt";
import MatrixResult from "./MatrixResult/MatrixResult";
import Navbar from "../Navbar/Navbar";

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

export default function Hero() {
  const [operation, setOperation] = useState(OPERATION_LIST[4]);
	const [matrixSize, setMatrixSize] = useState({ rows: 2, columns: 2 });
	const [matrix, setMatrix] = useState([
		[0, 0],
		[0, 0],
	]);
	const [result, setResult] = useState("");

	return (
		<>
			<main className="main">
				<Navbar
          operation={operation}
          setOperation={(object) => setOperation(object)}
				/>

				<main className="main-wrapper">
					<h2 className="operation-header">Matrix {operation.title}</h2>

					<MatrixPrompt
						matrixSize={matrixSize}
						setMatrixSize={(object) => setMatrixSize(object)}
						matrix={matrix}
						setMatrix={(object) => setMatrix(object)}
					></MatrixPrompt>

					<MatrixResult
						matrix={matrix}
						result={result}
						setResult={(object) => setResult(object)}
					></MatrixResult>
				</main>
			</main>
		</>
	);
}
