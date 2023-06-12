import React, { useState, useEffect } from "react";
import "katex/dist/katex.min.css";
import { BlockMath } from "react-katex";
import "../hero.css";

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

export default function MatrixResult({ matrix, secondMatrix, operation }) {
  const [latexMatrix, setLatexMatrix] = useState(
    "\\begin{pmatrix}\n 0 & 0\\\\\n 0 & 0\n \\end{pmatrix}"
  );

  useEffect(() => {
    setLatexMatrix(renderLatexMatrix(matrix));
  }, [matrix]);
  return (
    <>
      <h2 className="sub-header">Result:</h2>
      <BlockMath math={latexMatrix} />
    </>
  );
}
