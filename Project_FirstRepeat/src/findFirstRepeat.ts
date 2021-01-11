export let findNumbRepeat = (iAr: number[]): repeatsNumData => {

    let back: repeatNumData[] = []
    iAr.map((n1, i1) => {
        iAr.map((n2, i2) => {
            if (i1 < i2) {
                if (n1 == n2) {
                    back.push({ char: n2, pos: i2 })
                }
            }

        })
    })
    let temp: repeatNumData = back[0]
    back.map((e) => {
        if (e.pos < temp.pos) {
            temp.char = e.char
            temp.pos = e.pos
        }
    })
    return { first: temp, detail: back }

}

export let findStringRepeat = (iAr: string[]): repeatsStData => {

    let back: repeatStData[] = []

    iAr.map((n1, i1) => {
        iAr.map((n2, i2) => {
            if (i1 < i2) {
                if (n1 == n2) {
                    back.push({ char: n2, pos: i2 })
                }
            }

        })
    })
    let temp: repeatStData = back[0]
    back.map((e) => {
        if (e.pos < temp.pos) {
            temp.char = e.char
            temp.pos = e.pos
        }
    })
    return { first: temp, detail: back }

}

// quicker version
export let firstDuplicate = (iArr: number[]):number => {
    for (let i = 0; iArr.length; i++) {
        if (iArr[Math.abs(iArr[i]) - 1] < 0) return Math.abs(iArr[i])
        else iArr[Math.abs(iArr[i] - 1)] = -iArr[Math.abs(iArr[i]) - 1]
    }
    return -1
}

