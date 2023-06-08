import React from "react";
import { useState } from "react";
import "./hero.css";
import MatrixPrompt from "./MatrixPrompt/MatrixPrompt";
import MatrixResult from "./MatrixResult/MatrixResult";
import Navbar from "../Navbar/Navbar";

export const OPERATION_LIST = [
	{
		id: "add",
		title: "Addition",
		requiresTwoMatrices: true,
		requiresConstant: false,
	},
	{
		id: "subtract",
		title: "Subtraction",
		requiresTwoMatrices: true,
		requiresConstant: false,
	},
	{
		id: "multiplication",
		title: "Multiplication",
		requiresTwoMatrices: true,
		requiresConstant: false,
	},
	{
		id: "k-multiplication",
		title: "K-Multiplication",
		requiresTwoMatrices: false,
		requiresConstant: true,
	},
	{
		id: "transpose",
		title: "Transpose",
		requiresTwoMatrices: false,
		requiresConstant: false,
	},
	{
		id: "determinant",
		title: "Determinant",
		requiresTwoMatrices: false,
		requiresConstant: false,
	},
	{
		id: "cramers",
		title: "Cramer's Rule",
		requiresTwoMatrices: false,
		requiresConstant: false,
	},
	{
		id: "ref-rref",
		title: "REF/RREF",
		requiresTwoMatrices: false,
		requiresConstant: false,
	},
];

export default function Hero() {
	const [operation, setOperation] = useState(OPERATION_LIST[4]);
	const [matrixSize, setMatrixSize] = useState({ rows: 2, columns: 2 });
	const [matrix, setMatrix] = useState([
		[0, 0],
		[0, 0],
	]);
	const [secondMatrix, setSecondMatrix] = useState([
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
					<h2 className="operation-header">Matrix {operation.title}:</h2>

					<MatrixPrompt
						matrixSize={matrixSize}
						setMatrixSize={(object) => setMatrixSize(object)}
						matrix={matrix}
						setMatrix={(object) => setMatrix(object)}
						secondMatrix={secondMatrix}
						setSecondMatrix={(object) => setSecondMatrix(object)}
						operation={operation}
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
