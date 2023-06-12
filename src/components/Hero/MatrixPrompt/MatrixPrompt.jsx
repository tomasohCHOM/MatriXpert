import MatrixInputSize from "./MatrixInput/MatrixInputSize";
import MatrixInput from "./MatrixInput/MatrixInput";
import { OPERATION_LIST } from "../Hero";
import MatrixCalculations from "../../../lib/matrixCalculations";

export default function MatrixPrompt({
  matrixSize,
  setMatrixSize,
  secondMatrixSize,
  setSecondMatrixSize,
  matrix,
  setMatrix,
  secondMatrix,
  setSecondMatrix,
  operation,
}) {

  return (
    <>
      <div className="main-input-wrapper">
        {operation.requiresConstant && (
          <div className="wrapper-column">
            <form>
              <label>Constant K:</label>
              <input className="num-input" type="number" defaultValue={0} />
            </form>
          </div>
        )}
        <div className="wrapper-column">
          <MatrixInputSize
            setMatrixSize={(object) => setMatrixSize(object)}
          ></MatrixInputSize>
          <MatrixInput
            matrixSize={matrixSize}
            setMatrix={(matrix) => setMatrix(matrix)}
          ></MatrixInput>
        </div>
        {operation.requiresTwoMatrices && (
          <div className="wrapper-column">
            <MatrixInputSize
              setMatrixSize={(object) => setSecondMatrixSize(object)}
            ></MatrixInputSize>
            <MatrixInput
              matrixSize={secondMatrixSize}
              setMatrix={(matrix) => setSecondMatrix(matrix)}
            ></MatrixInput>
          </div>
        )}
      </div>
      <button form="input-form" className="input-submit">Calculate!</button>
    </>
  );
}
