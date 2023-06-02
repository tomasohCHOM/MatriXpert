import React from "react";
import { useState, useEffect } from "react";
import "./hero.css";
import MatrixPrompt from "./MatrixPrompt/MatrixPrompt";
import MatrixResult from "./MatrixResult/MatrixResult";

export default function Hero() {
	const [matrixSize, setMatrixSize] = useState({ rows: 2, columns: 2 });
	const [matrix, setMatrix] = useState([
		[0, 0],
		[0, 0],
	]);
	const [result, setResult] = useState("");

	return (
		<>
			<main className="main">
				<main className="main-wrapper">
					<MatrixPrompt
						matrixSize={matrixSize}
						setMatrixSize={(object) => setMatrixSize(object)}
						matrix={matrix}
						setMatrix={(object) => setMatrix(object)}
					></MatrixPrompt>
					<MatrixResult matrix={matrix}></MatrixResult>
				</main>
			</main>
		</>
	);
}
