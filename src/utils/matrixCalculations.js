export default class MatrixCalculations {
  static addMatrices = (a, b) => {
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

    for (let r = 0; r < a.length; ++r) {
      for (let c = 0; c < a[0].length; ++c) {
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
    for (let r = 0; r < dimensionSize; ++r) {
      for (let c = 0; c < dimensionSize; ++c) {
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
    for (let r = 0; r < dimensionSize; ++r) {
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
    if (a.length === 0 || a.length != a[0].length) return -1;
    // If only one entry, then we can just return the value of that entry.
    if (a.length == 1) return a[0][0];
    return this.determinantHelper(a);
  };

  static cramersRule = (a, b) => {
    let result = new Array(3).fill(0);
    let mainDeterminant = determinant(a);

    for (let c = 0; c < a.length; ++c) {
      let temp = new Array(a.length).fill().map(() => new Array());
      for (let r = 0; r < a.length; ++r) {
        temp[r][c] = b[r][0];
      }
      result[c] = determinant(temp) / mainDeterminant;
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
    requiresConstant: false,
    computeCalculation: MatrixCalculations.addMatrices,
  },
  {
    id: "subtract",
    title: "Subtraction",
    requiresTwoMatrices: true,
    requiresConstant: false,
    computeCalculation: MatrixCalculations.subtractMatrices,
  },
  {
    id: "multiplication",
    title: "Multiplication",
    requiresTwoMatrices: true,
    requiresConstant: false,
    computeCalculation: MatrixCalculations.multiplyMatrices,
  },
  {
    id: "k-multiplication",
    title: "K-Multiplication",
    requiresTwoMatrices: false,
    requiresConstant: true,
    computeCalculation: MatrixCalculations.kMultiplication,
  },
  {
    id: "transpose",
    title: "Transpose",
    requiresTwoMatrices: false,
    requiresConstant: false,
    computeCalculation: MatrixCalculations.transpose,
  },
  {
    id: "determinant",
    title: "Determinant",
    requiresTwoMatrices: false,
    requiresConstant: false,
    computeCalculation: MatrixCalculations.determinant,
  },
  {
    id: "cramers",
    title: "Cramer's Rule",
    requiresTwoMatrices: false,
    requiresConstant: false,
    // requiresConstantMatrix: true,
    computeCalculation: MatrixCalculations.cramersRule,
  },
  {
    id: "ref-rref",
    title: "REF/RREF",
    requiresTwoMatrices: false,
    requiresConstant: false,
    computeCalculation: MatrixCalculations.rref,
  },
];
