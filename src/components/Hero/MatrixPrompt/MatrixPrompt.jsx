import React, { useState, useEffect } from "react";
import "katex/dist/katex.min.css";
import { BlockMath } from "react-katex";
import MatrixInputSize from "./MatrixInputSize";
import MatrixInput from "./MatrixInput";

const renderLatexMatrix = (matrix) => {
  return (
    "\\begin{pmatrix}\n" +
    matrix
      .map((row, index) => {
        if (index === matrix.length) return row.join(" & ") + "\n";
        else return row.join(" & ") + "\\\\\n";
      })
      .join("") +
    "\\end{pmatrix}"
  );
};

export default function MatrixPrompt() {
  const [matrixSize, setMatrixSize] = useState({ rows: 2, columns: 2 });
  const [matrix, setMatrix] = useState([
    [0, 0],
    [0, 0],
  ]);

  const [latexMatrix, setLatexMatrix] = useState(
    "\\begin{pmatrix}\n 0 & 0\\\\\n 0 & 0\n \\end{pmatrix}"
  );

  useEffect(() => {
    setLatexMatrix(renderLatexMatrix(matrix));
  }, [matrix]);

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
      <BlockMath math={"A = " + latexMatrix} />
    </>
  );
}
