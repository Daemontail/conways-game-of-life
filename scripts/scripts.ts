export function generateMatrix(num: number):number[][] {
    const arr = new Array(num).fill(new Array(num).fill(0))
    return arr
}


export function checkNeighbours(matrix: number[][]) {
    const newMatrix = matrix.map((row: number[], rowI: number) => {
        return row.map((num: number, colI: number) => {
            let fate: number = 0

            for (let i = rowI - 1; i < rowI + 1; i++) {
                for (let j = colI - 1; j < colI + 1; i++) {
                    if(i<0 || j<0) return
                    if (j === rowI && i === colI) return
                    fate += matrix[i][j]
                }
            }

            if(matrix[rowI][colI] === 0 && fate === 3){
                return 1
            }
            if(matrix[rowI][colI]!=0 && fate>=2 && fate<=3){
                return 1
            }
            else return 0

        })
    })
    console.table(newMatrix)
    return newMatrix
}

export function flipVal(matrix:number[][],rowI:number,colI:number){
    const matrixCopy = matrix.map(row=>[...row])
    matrixCopy[rowI][colI] ? matrixCopy[rowI][colI] = 0 : matrixCopy[rowI][colI] = 1
    return matrixCopy 
}