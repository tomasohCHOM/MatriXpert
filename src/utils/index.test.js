import { test, expect } from "vitest";
import MatrixCalculations from "./matrixCalculations";
import { addMatricesExpectedResults } from "./expectedResults";

const firstMatrices = [
  [
    [2, 3],
    [5, 5],
  ],
  [
    [34, 12],
    [5, -3],
  ],
  [
    [10, 4.5],
    [2.1, -0.5],
  ],
  [
    [0, 9, 4],
    [-5, 1, 2],
    [3, 5, 6],
  ],
  [[1, 2]],
];
const secondMatrices = [
  [
    [3, 5],
    [6, 2],
  ],
  [
    [5, 74],
    [-23, -5],
  ],
  [
    [3.1, 5.5],
    [0.7, 12.8],
  ],
  [
    [5, 7, 1],
    [4, 3, 3],
    [10, 9, 8],
  ],
  [[4], [9]],
];

const subtractMatricesExpectedResults = [
  [
    [-1, -2],
    [-1, 3],
  ],
  [
    [29, -62],
    [28, 2],
  ],
  [
    [6.9, -1.0],
    [7 / 5, -13.3],
  ],
  [
    [5, 16, 5],
    [-1, 4, 5],
    [13, 14, 14],
  ],
  undefined,
];

const multiplyMatricesExpectedResults = [
  [
    [5, 8],
    [11, 7],
  ],
  [
    [39, 86],
    [-18, -8],
  ],
  [
    [683 / 20, 563 / 5],
    [154 / 25, 103 / 20],
  ],
  [
    [5, 16, 5],
    [-1, 4, 5],
    [13, 14, 14],
  ],
  undefined,
];

const determinantExpectedResults = [
  [
    [5, 8],
    [11, 7],
  ],
  [
    [39, 86],
    [-18, -8],
  ],
  [
    [13.1, 10.0],
    [2.8, 12.3],
  ],
  [
    [5, 16, 5],
    [-1, 4, 5],
    [13, 14, 14],
  ],
  undefined,
];

for (let i = 0; i < firstMatrices.length; i++) {
  test(`Testing Matrix Addition #${i + 1}`, () => {
    expect(
      MatrixCalculations.addMatrices(firstMatrices[i], secondMatrices[i])
        ?.computation
    ).toStrictEqual(addMatricesExpectedResults[i]);
  });
}

for (let i = 0; i < firstMatrices.length; i++) {
  test(`Testing Matrix Subtraction #${i + 1}`, () => {
    expect(
      MatrixCalculations.subtractMatrices(firstMatrices[i], secondMatrices[i])
        ?.computation
    ).toStrictEqual(subtractMatricesExpectedResults[i]);
  });
}

for (let i = 0; i < firstMatrices.length; i++) {
  test(`Testing Matrix Multiplication #${i + 1}`, () => {
    expect(
      MatrixCalculations.multiplyMatrices(
        firstMatrices[i],
        secondMatrices[i]
      )?.computation.toFixed(1)
    ).toStrictEqual(multiplyMatricesExpectedResults[i]);
  });
}

for (let i = 0; i < firstMatrices.length; i++) {
  test(`Testing Matrix Determinant #${i + 1}`, () => {
    expect(
      MatrixCalculations.determinant(firstMatrices[i])?.computation
    ).toStrictEqual(determinantExpectedResults[i]);
  });
}
