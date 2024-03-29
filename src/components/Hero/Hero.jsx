import React from "react";
import { useState } from "react";
import "./hero.scss";
import MatrixPrompt from "./MatrixPrompt/MatrixPrompt";
import MatrixResult from "./MatrixResult/MatrixResult";
import Navbar from "../Navbar/Navbar";
import { OPERATION_LIST } from "../../utils/matrixCalculations";

export default function Hero() {
  const [operation, setOperation] = useState(OPERATION_LIST[4]);
  const [matrixSize, setMatrixSize] = useState({ rows: 2, columns: 2 });
  const [secondMatrixSize, setSecondMatrixSize] = useState({
    rows: 2,
    columns: 2,
  });
  const [constant, setConstant] = useState(0);
  const [constantMatrix, setConstantMatrix] = useState([0, 0]);
  const [matrix, setMatrix] = useState([
    [0, 0],
    [0, 0],
  ]);
  const [secondMatrix, setSecondMatrix] = useState([
    [0, 0],
    [0, 0],
  ]);
  const [result, setResult] = useState("");
  const [explanation, setExplanation] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  return (
    <>
      <main className="main">
        <Navbar
          operation={operation}
          setOperation={(object) => setOperation(object)}
          setResult={setResult}
          setErrorMessage={setErrorMessage}
        />

        <main className="main-wrapper">
          <h2 className="sub-header">Matrix {operation.title}:</h2>
          <div className="operation-note">{operation.note}</div>

          <MatrixPrompt
            matrixSize={matrixSize}
            setMatrixSize={(object) => setMatrixSize(object)}
            secondMatrixSize={secondMatrixSize}
            setSecondMatrixSize={(object) => setSecondMatrixSize(object)}
            matrix={matrix}
            setMatrix={(object) => setMatrix(object)}
            secondMatrix={secondMatrix}
            setSecondMatrix={(object) => setSecondMatrix(object)}
            constant={constant}
            setConstant={(object) => setConstant(object)}
            constantMatrix={constantMatrix}
            setConstantMatrix={(object) => setConstantMatrix(object)}
            operation={operation}
            setResult={(object) => setResult(object)}
            setExplanation={(object) => setExplanation(object)}
            setErrorMessage={(object) => setErrorMessage(object)}
          ></MatrixPrompt>

          <div className="error">{errorMessage}</div>

          {result !== "" && (
            <MatrixResult
              matrix={matrix}
              secondMatrix={secondMatrix}
              operation={operation}
              result={result}
              explanation={explanation}
            ></MatrixResult>
          )}
        </main>
      </main>
    </>
  );
}
