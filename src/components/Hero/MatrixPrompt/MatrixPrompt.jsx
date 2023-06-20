import React, { useEffect } from "react";
import MatrixInputSize from "./MatrixInput/MatrixInputSize";
import MatrixInput from "./MatrixInput/MatrixInput";

const getEntriesFromConstantMatrix = (rows, constantMatrix) => {
  let constantB = [];
  for (let r = 0; r < rows; r++) {
    constantB[r] = constantMatrix[r] !== undefined ? constantMatrix[r] : 0;
  }
  return constantB;
}

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
  constantMatrix,
  setConstantMatrix,
  operation,
  setResult,
}) {
  const handleConstantChange = (event) => {
    event.preventDefault();
    setConstant(event.target.value);
  };

  const handleConstantMatrixChange = (event) => {
    event.preventDefault();
    let constantB = getEntriesFromConstantMatrix(matrixSize.rows, constantMatrix);
    const row = parseInt(event.target.name);
    // Check whether the input entry was a number. If not, default to 0
    constantB[row] = !isNaN(parseFloat(event.target.value))
      ? parseFloat(event.target.value)
      : 0;
    setConstantMatrix(constantB);
  };

  const handleSubmit = () => {
    if (operation.requiresTwoMatrices) {
      setResult(operation.computeCalculation(matrix, secondMatrix));
    } else if (operation.requiresConstant) {
      setResult(operation.computeCalculation(matrix, constant));
    } else {
      setResult(operation.computeCalculation(matrix));
    }
    if (operation.requiresConstantMatrix) {
      setResult(operation.computeCalculation(matrix, constantMatrix));
    }
  };

  useEffect(() => {
    let constantB = getEntriesFromConstantMatrix(matrixSize.rows, constantMatrix);
    setConstantMatrix(constantB);
  }, [matrixSize]);

  return (
    <>
      <div className="main-input-wrapper">
        {operation.requiresConstant && (
          <div className="wrapper-column">
            <form>
              <label>Constant K:</label>
              <input
                className="num-input"
                type="number"
                defaultValue={0}
                onChange={handleConstantChange}
              />
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
        {operation.requiresConstantMatrix && (
          <div className="wrapper-column">
            <form className="constant-matrix-form">
              <label className="constant-matrix-label">
                Constant Matrix B:
              </label>
              <br />
              {constantMatrix.map((row, indexRow = 1) => {
                return (
                  <React.Fragment key={indexRow + "fragment"}>
                    <input
                      className="num-input matrix-entry"
                      key={indexRow}
                      type="text"
                      defaultValue={0}
                      name={indexRow}
                      onChange={handleConstantMatrixChange}
                    />
                    <br key={indexRow + "break"} />
                  </React.Fragment>
                );
              })}
            </form>
          </div>
        )}
      </div>
      <button className="input-submit" onClick={handleSubmit}>
        Calculate!
      </button>
    </>
  );
}
