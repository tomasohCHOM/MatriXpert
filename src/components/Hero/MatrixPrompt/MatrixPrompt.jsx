import React, { useState } from "react";
import MatrixInputSize from "./MatrixInput/MatrixInputSize";
import MatrixInput from "./MatrixInput/MatrixInput";

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
  setResult
}) {
  const handleConstantChange = e => {
    setConstant(e.target.value);
  }

  const handleSubmit = () => {
    // console.log(matrix);
    // console.log(secondMatrix);
    // console.log(constant);
    // console.log(operation);
    if (operation.requiresTwoMatrices) {
      setResult(operation.computeCalculation(matrix, secondMatrix));
    } else if (operation.requiresConstant) {
      setResult(operation.computeCalculation(matrix, constant));
    } else {
      setResult(operation.computeCalculation(matrix));
    }
  }

  return (
    <>
      <div className="main-input-wrapper">
        {operation.requiresConstant && (
          <div className="wrapper-column">
            <form>
              <label>Constant K:</label>
              <input className="num-input" type="number" defaultValue={0} onChange={handleConstantChange} />
            </form>
          </div>
        )}
        <div className="wrapper-column">
          <MatrixInputSize
            setMatrixSize={(object) => setMatrixSize(object)}
            setMatrix={(matrix) => setMatrix(matrix)}
          ></MatrixInputSize>
          <MatrixInput
            matrix={matrix}
            matrixSize={matrixSize}
            setMatrix={(matrix) => setMatrix(matrix)}
          ></MatrixInput>
        </div>
        {operation.requiresTwoMatrices && (
          <div className="wrapper-column">
            <MatrixInputSize
              setMatrixSize={(object) => setSecondMatrixSize(object)}
              setMatrix={(matrix) => setSecondMatrix(matrix)}
            ></MatrixInputSize>
            <MatrixInput
              matrix={secondMatrix}
              matrixSize={secondMatrixSize}
              setMatrix={(matrix) => setSecondMatrix(matrix)}
            ></MatrixInput>
          </div>
        )}
      </div>
      <button className="input-submit" onClick={handleSubmit}>Calculate!</button>
    </>
  );
}
