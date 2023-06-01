function addMatrices(a, b) {
    let result = [];
    for (let r = 0; r < a.length; r++) {
        result[r] = [];
        for (let c = 0; c < a[0].length; c++) {
            result[r].push(a[r][c] + b[r][c]);
        }
    }
    return result;
}

function subtractMatrices(a, b) {
    let result = [];
    for (let r = 0; r < a.length; r++) {
        result[r] = [];
        for (let c = 0; c < a[0].length; c++) {
            result[r].push(a[r][c] - b[r][c]);
        }
    }
    return result;
}

function multiplyMatrices(a, b) {
    let result = [];
    const commonExtent = a[0].length;
    for (let r = 0; r < a.length; r++) {
        result[r] = [];
        for (let c = 0; c < a[0].length; c++) {
            result[r].push(multiplicationHelper(r, c, commonExtent, a, b));
        }
    }
    return result;
}

function multiplicationHelper(r, c, commonExtent, a, b) {
    let productResult = 0.0;
    for (let k = 0; k < commonExtent; k++) {
        productResult += a[r][k] * b[k][c];
    }
    return productResult;
}

function transpose(a) {
  // If the input Matrix is empty, we don't need to do anything, just return a default-constructed Matrix.
  if (a.length === 0) return;
  // Initialize the resultant Matrix's rows to the number of columns of the input Matrix.
  let result = a;

  for (let r = 0; r < a.size(); ++r) {
      for (let c = 0; c < a[0].size(); ++c) {
          // If the input matrix has a i-j value, then the result Matrix should make it a j-i value
          // (where i is the row and j is the column).
          // Push back values using c (column) as our new row.
          result[c].push(a[r][c]);
      }
  }
  return result;
}

function getSubMatrix(i, j, dimensionSize, a) {
  Matrix resultantMatrix(dimensionSize - 1);
  let m = 0;
  // Loop through rows and columns.
  for (let r = 0; r < dimensionSize; ++r) {
      for (let c = 0; c < dimensionSize; ++c) {
          // If it happens to be the same row, break. If same column, continue to the next iteration.
          if (i == r) break;
          if (j == c) continue;
          // Otherwise, push the value to the subMatrix.
          resultantMatrix[m].push(a[r][c]);
      }
      // If added values to the subMatrix successfully, move to the next subMatrix row.
      if (!resultantMatrix[m].empty()) ++m;
  }
  return resultantMatrix;
}

function determinantHelper(a) {
  // If the input Matrix is a 2x2 Matrix, we just calculate the cofactor for it.
  if (a.size() == 2) {
      return a[0][0] * a[1][1] - a[0][1] * a[1][0];
  }
  double determinantResult = 0.0;
  // Initialize the size of the input matrix once and use it everywhere.
  let dimensionSize = a.size();
  for (let r = 0; r < dimensionSize; ++r) {
      // Initialize a sub-Matrix using the getSubMatrix function.
      Matrix subMatrix = getSubMatrix(r, 0, dimensionSize, a);
      // Accumulate the determinant for Matrix a, making a recursive call passing that subMatrix.
      determinantResult += pow(-1, r) * a[r][0] * determinantHelper(subMatrix);
  }
  return determinantResult;
}

function determinant(a) {
  // If it is NOT a square matrix, determinant cannot be calculated.
  if (a.empty() || (a.size() != a[0].size())) return -1;
  // If only one entry, then we can just return the value of that entry.
  if (a.size() == 1) return a[0][0];
  return determinantHelper(a);
}

function cramersRule(a, b) {
  std::array<double, 3> result;
  double mainDeterminant = determinant(a);

  for (let c = 0; c < a.size(); ++c) {
      Matrix temp = a;
      for (let r = 0; r < a.size(); ++r) {
          temp[r][c] = b[r][0];
      }
      result[c] = determinant(temp) / mainDeterminant;
  }
  return result;
}

function printMatrix(sampleMatrix) {
  for (let r = 0; r < sampleMatrix.size(); ++r) {
      std::cout << "[ ";
      for (let c = 0; c < sampleMatrix[0].size(); ++c) {
          if (c != sampleMatrix[0].size() - 1)
              std::cout << std::setprecision(4) << sampleMatrix[r][c] << std::setw(8);
          else
              std::cout << std::setprecision(4) << sampleMatrix[r][c];
      }
      std::cout << "]\n";
  }
  std::cout << "\n";
}

function rref(a) {
  /*
  if (a.empty()) return a;

  Matrix result = a;
  const let rows = result.size();
  const let cols = result[0].size();
  let lead = 0;
  while (lead < rows) {
      double divisor, multiplier;
      for (let r = 0; r < rows; ++r) {
          divisor = result[lead][lead];
          multiplier = result[r][lead] / divisor;
          for (let c = 0; c < cols; ++c) {
              if (r == lead)
                  result[r][c] /= divisor;
              else
                  result[r][c] -= result[lead][c] * multiplier;
          } 
      }
      ++lead;
      printMatrix(result);
  }
  return result;
  */
  Matrix result = a;
  let lead = 0; // The current leading column
  let rowCount = result.size(); // The number of rows in the matrix
  let colCount = result[0].size(); // The number of columns in the matrix
  for (let r = 0; r < rowCount; r++) { // For each row...
      if (colCount <= lead) { // If we've processed all columns, we're done
          return result;
      }
      let i = r;
      // Search for a row with a non-zero entry in the current leading column
      while (abs(result[i][lead]) < 1e-10) {
          i++;
          if (rowCount == i) { // If we've processed all rows, move to the next column
              i = r;
              lead++;
              if (colCount == lead) { // If we've processed all columns, we're done
                  return result;
              }
          }
      }
      // Swap the current row with the row we found
      std::swap(result[i], result[r]);
      double lv = result[r][lead];
      // Divide the current row by its leading coefficient to make it a leading 1
      for (let j = 0; j < colCount; j++) {
          result[r][j] /= lv;
      }
      // Subtract multiples of the current row from all other rows to make their leading coefficients zero
      for (let i = 0; i < rowCount; i++) {
          if (i != r) {
              double lv = result[i][lead];
              for (let j = 0; j < colCount; j++) {
                  result[i][j] -= lv * result[r][j];
              }
          }
      }
      lead++; // Move to the next leading column
  }
  return result;
}