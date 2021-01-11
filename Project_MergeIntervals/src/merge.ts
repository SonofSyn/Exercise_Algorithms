
export let mergeInter = (iArr: number[][]): number[][] => {
    let backArr: number[][] = []
    let length = iArr.length
    iArr = iArr.sort((a, b) => a[0] - b[0])

    for (let i = 0; i < length - 1; i++) {
        console.log(i)
        if (iArr[i][1] >= iArr[i + 1][0]) {
            backArr.push([iArr[i][0], iArr[i + 1][1]])
            i++
            if (i == length - 2) backArr.push(iArr[i + 1])

        }
        else {
            backArr.push(iArr[i])
            if (i == length - 2) backArr.push(iArr[i + 1])
        }

    }


    return backArr
}