import React, { useState } from "react";
import MatrixInputSize from "./MatrixInput/MatrixInputSize";
import MatrixInput from "./MatrixInput/MatrixInput";
import { OPERATION_LIST } from "../Hero";
import MatrixCalculations from "../../../utils/matrixCalculations";

export default function MatrixPrompt({
  matrixSize,
  setMatrixSize,
  secondMatrixSize,
  setSecondMatrixSize,
  matrix,
  setMatrix,
  secondMatrix,
  setSecondMatrix,
  constant,
  setConstant,
  operation,
}) {
  const providedInputs = {
    matrix: matrix,
    secondMatrix: secondMatrix,
    constant: constant
  }
  const [inputs, setInputs] = useState(providedInputs);

  const handleChange = e => {
    setConstant(e.target.value);
  }

  console.log(matrix);
  console.log(secondMatrix);
  console.log(constant);
  return (
    <>
      <div className="main-input-wrapper">
        {operation.requiresConstant && (
          <div className="wrapper-column">
            <form>
              <label>Constant K:</label>
              <input className="num-input" type="number" defaultValue={0} onChange={handleChange} />
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
            formId="first-matrix-input-form"
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
              formId="second-matrix-input-form"
            ></MatrixInput>
          </div>
        )}
      </div>
      <button form="second-matrix-input-form" className="input-submit">Calculate!</button>
    </>
  );
}
