import { test, expect } from "vitest";
import { Decimal } from "decimal.js";
import MatrixCalculations from "./matrixCalculations";
import {
  addMatricesExpectedResults,
  subtractMatricesExpectedResults,
  multiplyMatricesExpectedResults,
  determinantExpectedResults,
} from "./expectedResults";

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
      MatrixCalculations.multiplyMatrices(firstMatrices[i], secondMatrices[i])
        ?.computation
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

test("Decimal JS Library", () => {
  expect(new Decimal(0.1).plus(0.2)).toStrictEqual(new Decimal(0.3));
});
