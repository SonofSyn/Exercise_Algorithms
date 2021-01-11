export let rotateArr = (iArr: number[][]): number[][] => {
    let length: number = iArr.length - 1
    let backArr: number[][] = iArr.map(e=>[...e])

    for (let i = 0; i <= length; i++) {
        for (let j = 0; j <= length; j++) {
            let change = rotatePos(i, j, length)
            backArr[change.column][change.row] = iArr[i][j]
        }
    }
    return backArr
}

let rotatePos = (column: number, row: number, length: number): position => {
    let backColumn = row
    let backRow = 0
    if (column == length) { }
    else if (column == 0) backRow = length
    else backRow = length - column
    return { column: backColumn, row: backRow }
}