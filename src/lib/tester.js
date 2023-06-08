import { generateRandomMatrix } from "./utils";
import MatrixCalculations from "./matrixCalculations";

const tester = () => {
  console.log("Adding");
  for (let i = 0; i < 10; i++) {
    console.log(MatrixCalculations.addMatrices(generateRandomMatrix(2, 2), generateRandomMatrix(2, 2)));
  }
  console.log("Subtracting");
  for (let i = 0; i < 10; i++) {
    console.log(MatrixCalculations.subtractMatrices(generateRandomMatrix(3, 3), generateRandomMatrix(3, 3)));
  }
  console.log("Multiplying");
  for (let i = 0; i < 10; i++) {
    console.log(MatrixCalculations.multiplyMatrices(generateRandomMatrix(3, 1), generateRandomMatrix(1, 2)));
  }
  console.log("Determinant");
  for (let i = 0; i < 10; i++) {
    console.log(MatrixCalculations.determinant(generateRandomMatrix(3, 3)));
  }
}

export default tester;