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
        <MatrixInputSize
          setMatrixSize={(object) => setMatrixSize(object)}
        ></MatrixInputSize>
      </div>
      <MatrixInput
        matrixSize={matrixSize}
        setMatrix={(matrix) => setMatrix(matrix)}
      ></MatrixInput>
    </>
  );
}
