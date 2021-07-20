type Matrix = number[][];

export function rotateMatrix(matrix: Matrix): Matrix {
  const rotatedMatrix: Matrix = Array.from(Array(matrix.length), () =>
    Array.from(Array(matrix.length))
  );

  matrix.forEach((array, i) => {
    array.forEach((num, j) => {
      rotatedMatrix[j][matrix.length - 1 - i] = num;
    });
  });

  return rotatedMatrix;
}
