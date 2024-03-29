import React, { useState, useEffect } from "react";
import "katex/dist/katex.min.css";
import { BlockMath } from "react-katex";

const renderLatexMatrix = (result) => {
  return (
    "\\begin{pmatrix}\n" +
    result
      .map((row, index) => {
        if (index === result.length) return row.join(" & ") + "\n";
        else return row.join(" & ") + "\\\\\n";
      })
      .join("") +
    "\\end{pmatrix}"
  );
};

const renderSolutions = (result) => {
  return (
    "" +
    result.map((value, index) => {
      index++;
      if (index === 1) return `x_${index} = ${value}`;
      return `\\\\x_${index} = ${value}`;
    })
  );
};

export default function MatrixResult({ result, explanation }) {
  const [latexResult, setLatexResult] = useState("");

  useEffect(() => {
    Array.isArray(result)
      ? Array.isArray(result[0])
        ? setLatexResult(renderLatexMatrix(result))
        : setLatexResult(renderSolutions(result))
      : setLatexResult(result.toString());
  }, [result]);
  return (
    <>
      <h2 className="sub-header">Result:</h2>
      <BlockMath math={latexResult} />
      <div>{explanation}</div>
    </>
  );
}
