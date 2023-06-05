import MatrixInputSize from "./MatrixInput/MatrixInputSize";
import MatrixInput from "./MatrixInput/MatrixInput";

export default function MatrixPrompt({
	matrixSize,
	setMatrixSize,
	matrix,
	setMatrix,
}) {
	return (
		<>
			<div className="size-input-wrapper">
				<div className="wrapper-column">
					<MatrixInputSize
						setMatrixSize={(object) => setMatrixSize(object)}
					></MatrixInputSize>
					<MatrixInput
						matrixSize={matrixSize}
						setMatrix={(matrix) => setMatrix(matrix)}
					></MatrixInput>
				</div>
        {/* <div className="wrapper-column">
					<MatrixInputSize
						setMatrixSize={(object) => setMatrixSize(object)}
					></MatrixInputSize>
					<MatrixInput
						matrixSize={matrixSize}
						setMatrix={(matrix) => setMatrix(matrix)}
					></MatrixInput>
				</div> */}
			</div>
		</>
	);
}
