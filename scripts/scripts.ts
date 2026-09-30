export function generateMatrix(num: number):number[][] {
    const arr = new Array(num).fill(new Array(num).fill(0))
    return arr
}

export function checkNeighbours(matrix: number[][]): number[][] {
  return matrix.map((row, rowI) =>
    row.map((cell, colI) => {
      let neighbours = 0;

      for (let i = rowI - 1; i <= rowI + 1; i++) {
        for (let j = colI - 1; j <= colI + 1; j++) {
          if (i === rowI && j === colI) continue;
          if (i >= 0 && i < matrix.length && j >= 0 && j < matrix[i].length) {
            neighbours += matrix[i][j];
          }
        }
      }

      if (cell === 1) return neighbours === 2 || neighbours === 3 ? 1 : 0;
      return neighbours === 3 ? 1 : 0;
    })
  );
}

export function flipVal(matrix:number[][],rowI:number,colI:number){
    const matrixCopy = matrix.map(row=>[...row])
    matrixCopy[rowI][colI] ? matrixCopy[rowI][colI] = 0 : matrixCopy[rowI][colI] = 1
    return matrixCopy 
}