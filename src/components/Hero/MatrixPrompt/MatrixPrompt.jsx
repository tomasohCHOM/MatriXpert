import React, { useEffect } from "react";
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
  constantMatrix,
  setConstantMatrix,
  operation,
  setResult,
}) {
  const handleConstantChange = (event) => {
    event.preventDefault();
    setConstant(event.target.value);
  };

  const handleConstantMatrixChange = (event) => {};

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
  };

  useEffect(() => {
    let constantB = [];
    for (let r = 0; r < matrixSize.rows; r++) {
      constantB[r] = constantMatrix[r] ? constantMatrix[r] : 0;
    }
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
            <form>
              <label>Constant Matrix B:</label>
              <br />
              {constantMatrix.map((row, indexRow = 1) => {
                return (
                  <>
                    <input
                      className="num-input matrix-entry"
                      key={indexRow + "   "}
                      type="text"
                      defaultValue={0}
                      name={indexRow}
                      onChange={handleConstantMatrixChange}
                    />
                    <br />
                  </>
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
