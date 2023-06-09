import { generateRandomMatrix } from "./utils";
import MatrixCalculations from "./matrixCalculations";

const tester = () => {
  console.log("Adding");
  for (let i = 0; i < 10; i++) {
    const firstMatrix = generateRandomMatrix(2, 2);
    const secondMatrix = generateRandomMatrix(2, 2);
    console.log("First Matrix:");
    console.log(firstMatrix);
    console.log("Second Matrix:");
    console.log(secondMatrix);
    console.log(MatrixCalculations.addMatrices(firstMatrix, secondMatrix));
  }
  console.log("Subtracting");
  for (let i = 0; i < 10; i++) {
    const firstMatrix = generateRandomMatrix(3, 3);
    const secondMatrix = generateRandomMatrix(3, 3);
    console.log("First Matrix:");
    console.log(firstMatrix);
    console.log("Second Matrix:");
    console.log(secondMatrix);
    console.log(MatrixCalculations.subtractMatrices(firstMatrix, secondMatrix));
  }
  console.log("Multiplying");
  for (let i = 0; i < 10; i++) {
    const firstMatrix = generateRandomMatrix(3, 1);
    const secondMatrix = generateRandomMatrix(1, 2);
    console.log("First Matrix:");
    console.log(firstMatrix);
    console.log("Second Matrix:");
    console.log(secondMatrix);
    console.log(MatrixCalculations.multiplyMatrices(firstMatrix, secondMatrix));
  }
  console.log("Transpose");
  for (let i = 0; i < 10; i++) {
    const matrix = generateRandomMatrix(3, 2);
    console.log("Matrix:");
    console.log(matrix);
    console.log(MatrixCalculations.transpose(matrix));
  }
  console.log("Determinant");
  for (let i = 0; i < 10; i++) {
    const matrix = generateRandomMatrix(3, 3);
    console.log("Matrix:");
    console.log(matrix);
    console.log(MatrixCalculations.determinant(matrix));
  }
  console.log("RREF");
  for (let i = 0; i < 10; i++) {
    const matrix = generateRandomMatrix(3, 3);
    console.log("Matrix:");
    console.log(matrix);
    console.log(MatrixCalculations.rref(matrix));
  }
};

export default tester;
