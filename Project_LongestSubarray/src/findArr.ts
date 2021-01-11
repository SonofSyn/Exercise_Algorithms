import { testArr } from "./test"

let calcAllSubSum = (iArr: number[]): boundArr => {
    let length: number = iArr.length
    let boundsArr: boundArr = []
    for (let i = 0; i < length; i++) {
        for (let j = i; j < length; j++) {
            let temp: number = 0
            for (let h = i; h <= j; h++) {
                temp = temp + iArr[h]
            }
            boundsArr.push({ sum: temp, begin: i, end: j, length: j + 1 - i })
        }
    }
    return boundsArr
}

export let determinLongestSubBound = (sum: number, iArr: number[]): bound => {
    let boundsArr = calcAllSubSum(iArr)
    let back: bound = { sum: -1, begin: -1, end: -1, length: -1 }
    let temp: number = 0
    boundsArr.map(b => {
        if (b.sum == sum) {
            if (b.length > temp) {
                temp = b.length
                back = b
            }

        }
    })
    return back
}

// quicker version
export let findLongestSub = (s: number, iArr: number[]) => {
    let result: number[] = [-1]
    let sum = 0
    let left = 0
    let right = 0
    let length = iArr.length
    while (right < length) {
        sum += iArr[right]
        while (left < right && sum > s) {
            sum -= iArr[left++]
        }
        if (sum == s && (result.length == 1 || result[1] - result[0] < right - left)) {
            result = [left, right]
        }
        right++
    }
    return result
}

export let longestSub = (sum: number, iArr: number[]) => {
    let tempArr: number[] = []
    let length: number = iArr.length
    let tempSum = 0
    let back: number[] = []

    for (let i = 0; i < length; i++) {
        tempSum += iArr[i]
        tempArr.push(i)
        for (let j = i + 1; j < length; j++) {
            tempSum += iArr[j]
            tempArr.push(j)
            if (tempSum == sum) {
                if (back.length < tempArr.length) {
                    back = [tempArr[0], tempArr[tempArr.length - 1]]
                }
            }
            else if (tempSum > sum) {
                tempSum = 0
                tempArr = []
                break
            }
        }

    }
    return back
}