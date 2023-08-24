import { test, expect } from "vitest";
import MatrixCalculations from "./matrixCalculations";

const firstMatrices = [
  [
    [2, 3],
    [5, 5],
  ],
];
const secondMatrices = [
  [
    [3, 5],
    [6, 2],
  ],
];

for (let i = 0; i < firstMatrices.length; i++) {
  test("Testing Matrix Additions.", () => {
    expect(
      MatrixCalculations.addMatrices(firstMatrices[i], secondMatrices[i])
        .computation
    ).toStrictEqual([
      [5, 8],
      [11, 7],
    ]);
  });
}
