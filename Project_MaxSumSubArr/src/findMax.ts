
export let maxSubSum = (iArr: number[]): number[] => {
    let backSum: number = 0
    let backArr: number[] = []
    let tempSum: number = 0
    let length: number = iArr.length
    iArr.map((e, eIx) => {
        tempSum = 0
        for (let i = eIx; i < length; i++) {
            if (0 > tempSum + iArr[i]) break
            else {
                tempSum = tempSum + iArr[i]
                if (backSum < tempSum) {
                    backSum = tempSum
                    backArr = []
                    backArr = iArr.slice(eIx, i + 1)
                }
            }
            console.log(e)
        }
    })

    return backArr
}