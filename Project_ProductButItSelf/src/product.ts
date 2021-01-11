let getProductWithOut = (pos: number, iArr: number[], length: number): number => {
    let back: number = 1
    for (let i = 0; i < length; i++) {
        if (i != pos) back = back * iArr[i]
    }
    return back
}

export let getAllProducts = (iArr: number[]): number[] => {
    let length: number = iArr.length
    let back: number[] = []
    for (let i = 0; i < length; i++) {
        back.push(getProductWithOut(i, iArr, length))
    }
    return back
}