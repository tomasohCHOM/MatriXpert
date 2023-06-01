import React, { useState, useEffect } from "react";
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';
import MatrixInputSize from "./MatrixInputSize";
import MatrixInput from "./MatrixInput";

export default function MatrixPrompt() {
  const [matrixSize, setMatrixSize] = useState({ rows: 2, columns: 2 });
  const [matrix, setMatrix] = useState([[0, 0], [0, 0]]);

  const [latexMatrix, setLatexMatrix] = useState(
    "\\begin{pmatrix}\n 0 & 0\\\\\n 0 & 0\n \\end{pmatrix}"
  );


  return (
    <>
      <div className="size-input-wrapper">
        <MatrixInputSize setMatrixSize={object => setMatrixSize(object)}></MatrixInputSize>
      </div>
      <MatrixInput matrixSize={matrixSize} setMatrix={matrix => setMatrix(matrix)}></MatrixInput>
    </>
  );
}
