export let findPivot = (iArr: number[]): number => {
    if (iArr == null || iArr.length == 0) return -1
    let left = 0
    let right = iArr.length - 1
    let i =0
    while (left < right) {
        i++
        console.log("l1 "+i)
        let midpoint = Math.floor(left + (right - left) / 2)
        if (iArr[midpoint] > iArr[right]) left = midpoint + 1
        else right = midpoint
    }
    return left
}

export let findTarget = (iArr: number[], target: number): number => {
    let start = findPivot(iArr)
    let left = 0
    let right = iArr.length - 1
    let i=0
    if (target >= iArr[start] && target <= iArr[right]) left = start
    else right = start

    while (left <= right) {
        i++
        console.log("lf2 "+i)
        let midpoint = Math.floor(left + (right - left) / 2)
        if (iArr[midpoint] == target) return midpoint
        else if (iArr[midpoint] < target) left = midpoint
        else right = midpoint - 1
    }
    return -1
}