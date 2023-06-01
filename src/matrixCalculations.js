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