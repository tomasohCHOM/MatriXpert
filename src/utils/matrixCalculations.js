export default class MatrixCalculations {
  static addMatrices = (a, b) => {
    if (a.length !== b.length || a[0].length !== b[0].length) return;

    let result = [];
    // Add each Matrix A (i, j) entry with its correspondant (i, j) entry in Matrix B
    for (let r = 0; r < a.length; r++) {
      result[r] = [];
      for (let c = 0; c < a[0].length; c++) {
        result[r].push(a[r][c] + b[r][c]);
      }
    }
    return result;
  };

  static subtractMatrices = (a, b) => {
    if (a.length !== b.length || a[0].length !== b[0].length) return;

    let result = [];
    // Subtract each Matrix A (i, j) entry with its correspondant (i, j) entry in Matrix B
    for (let r = 0; r < a.length; r++) {
      result[r] = [];
      for (let c = 0; c < a[0].length; c++) {
        result[r].push(a[r][c] - b[r][c]);
      }
    }
    return result;
  };

  static multiplicationHelper = (r, c, commonExtent, a, b) => {
    let productResult = 0.0;
    for (let k = 0; k < commonExtent; k++) {
      productResult += a[r][k] * b[k][c];
    }
    return productResult;
  };

  static multiplyMatrices = (a, b) => {
    if (a[0].length !== b.length) return;

    let result = [];
    const commonExtent = a[0].length;
    for (let r = 0; r < a.length; r++) {
      result[r] = [];
      for (let c = 0; c < b[0].length; c++) {
        result[r].push(this.multiplicationHelper(r, c, commonExtent, a, b));
      }
    }
    return result;
  };

  static kMultiplication = (a, k) => {
    let result = [];
    // Multiply each entry in the Matrix with constant k.
    for (let r = 0; r < a.length; r++) {
      result[r] = [];
      for (let c = 0; c < a[0].length; c++) {
        result[r].push(a[r][c] * k);
      }
    }
    return result;
  };

  static transpose = (a) => {
    // If the input Matrix is empty, we don't need to do anything, just return a default-constructed Matrix.
    if (a.length === 0) return;
    // Initialize the resultant Matrix's rows to the number of columns of the input Matrix.
    let result = new Array(a[0].length).fill(0).map(() => new Array());

    for (let r = 0; r < a.length; r++) {
      for (let c = 0; c < a[0].length; c++) {
        // If the input matrix has a i-j value, then the result Matrix should make it a j-i value
        // (where i is the row and j is the column).
        // Push back values using c (column) as our new row.
        result[c].push(a[r][c]);
      }
    }
    return result;
  };

  static getSubMatrix = (i, j, dimensionSize, a) => {
    let resultantMatrix = new Array(dimensionSize - 1)
      .fill()
      .map(() => new Array());
    let m = 0;
    // Loop through rows and columns.
    for (let r = 0; r < dimensionSize; r++) {
      for (let c = 0; c < dimensionSize; c++) {
        // If it happens to be the same row, break. If same column, continue to the next iteration.
        if (i === r) break;
        if (j === c) continue;
        // Otherwise, push the value to the subMatrix.
        resultantMatrix[m].push(a[r][c]);
      }
      // If added values to the subMatrix successfully, move to the next subMatrix row. Don't move to next row
      // if we are already at the last one.
      if (i !== r && resultantMatrix[m].length !== 0) m++;
    }
    return resultantMatrix;
  };

  static determinantHelper = (a) => {
    // If the input Matrix is a 2x2 Matrix, we just calculate the cofactor for it.
    if (a.length == 2) {
      return a[0][0] * a[1][1] - a[0][1] * a[1][0];
    }
    let determinantResult = 0.0;
    // Initialize the size of the input matrix once and use it everywhere.
    let dimensionSize = a.length;
    for (let r = 0; r < dimensionSize; r++) {
      // Initialize a sub-Matrix using the getSubMatrix function.
      let subMatrix = this.getSubMatrix(r, 0, dimensionSize, a);
      // Accumulate the determinant for Matrix a, making a recursive call passing that subMatrix.
      determinantResult +=
        Math.pow(-1, r) * a[r][0] * this.determinantHelper(subMatrix);
    }
    return determinantResult;
  };

  static determinant = (a) => {
    // If it is NOT a square matrix, determinant cannot be calculated.
    if (a.length != a[0].length) return;
    // If only one entry, then we can just return the value of that entry.
    if (a.length == 1) return a[0][0];
    return this.determinantHelper(a);
  };

  static deepCopyMatrix = (a) => {
    let copiedArray = [];
    for (let r = 0; r < a.length; r++) {
      copiedArray[r] = a[r].slice();
    }
    return copiedArray;
  }

  static cramersRule = (a, b) => {
    if (a.length != a[0].length || a.length !== b.length) return;

    let result = new Array(a.length).fill(0);
    let mainDeterminant = this.determinant(a);

    for (let c = 0; c < a.length; c++) {
      // Create a copy of the original array, except replace the respective column with constant matrix b.
      let temp = this.deepCopyMatrix(a);
      for (let r = 0; r < a.length; r++) {
        temp[r][c] = b[r];
      }
      result[c] = this.determinant(temp) / mainDeterminant;
    }
    return result;
  };

  static rref = (a) => {
    let result = a.map((arr) => {
      return arr.slice();
    });
    let lead = 0; // The current leading column
    let rowCount = result.length; // The number of rows in the matrix
    let colCount = result[0].length; // The number of columns in the matrix
    for (let r = 0; r < rowCount; r++) {
      // For each row...
      if (colCount <= lead) {
        // If we've processed all columns, we're done
        return result;
      }
      let i = r;
      // Search for a row with a non-zero entry in the current leading column
      while (Math.abs(result[i][lead]) < 1e-10) {
        i++;
        if (rowCount == i) {
          // If we've processed all rows, move to the next column
          i = r;
          lead++;
          if (colCount == lead) {
            // If we've processed all columns, we're done
            return result;
          }
        }
      }
      // Swap the current row with the row we found
      [result[i], result[r]] = [result[r], result[i]];
      let lv = result[r][lead];
      // Divide the current row by its leading coefficient to make it a leading 1
      for (let j = 0; j < colCount; j++) {
        result[r][j] /= lv;
      }
      // Subtract multiples of the current row from all other rows to make their leading coefficients zero
      for (let i = 0; i < rowCount; i++) {
        if (i != r) {
          let lv = result[i][lead];
          for (let j = 0; j < colCount; j++) {
            result[i][j] -= lv * result[r][j];
          }
        }
      }
      lead++; // Move to the next leading column
    }
    return result;
  };
}

export const OPERATION_LIST = [
  {
    id: "add",
    title: "Addition",
    requiresTwoMatrices: true,
    note: "Note: Both matrices must have the same dimensions for the calculation to work.",
    errorMessage: "Error: The Matrices don't have equal dimensions.",
    computeCalculation: MatrixCalculations.addMatrices,
  },
  {
    id: "subtract",
    title: "Subtraction",
    requiresTwoMatrices: true,
    note: "Note: Both matrices must have the same dimensions for the calculation to work.",
    errorMessage: "Error: The Matrices don't have equal dimensions.",
    computeCalculation: MatrixCalculations.subtractMatrices,
  },
  {
    id: "multiplication",
    title: "Multiplication",
    requiresTwoMatrices: true,
    note: "Note: The first matrix's number of columns MUST equal to the second matrix's number of rows.",
    errorMessage: "Error: First matrix's number of columns must equal to second matrix's number of rows.",
    computeCalculation: MatrixCalculations.multiplyMatrices,
  },
  {
    id: "k-multiplication",
    title: "K-Multiplication",
    requiresConstant: true,
    errorMessage: "",
    computeCalculation: MatrixCalculations.kMultiplication,
  },
  {
    id: "transpose",
    title: "Transpose",
    errorMessage: "",
    computeCalculation: MatrixCalculations.transpose,
  },
  {
    id: "determinant",
    title: "Determinant",
    note: "Note: The input matrix must be square (the number of rows is equal to the number of columns).",
    errorMessage: "Error: The matrix isn't square.",
    computeCalculation: MatrixCalculations.determinant,
  },
  {
    id: "cramers",
    title: "Cramer's Rule",
    requiresConstantMatrix: true,
    note: "Note: The input matrix must be square (the number of rows is equal to the number of columns).",
    errorMessage: "Error: The matrix isn't square.",
    computeCalculation: MatrixCalculations.cramersRule,
  },
  {
    id: "ref-rref",
    title: "REF/RREF",
    computeCalculation: MatrixCalculations.rref,
  },
];
