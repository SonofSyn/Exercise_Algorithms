interface Repeat {
    check: boolean,
    char: string,
    amount: number
}

export let detailCheckString = (iSt: string): { iSt: string, st: string, detail: Repeat[] } => {
    let back: Repeat[] = []
    let st: string = "";
    let loops = iSt.length
    for (let i = 0; i < loops; i++) {
        let temp = checkRepeatChar(iSt, i)
        let n = 0
        if (temp.amount == 0) {
            st = st + temp.char
        }
        if (back == []) back.push(temp)
        else {
            back.map(e => {
                if (e.char == temp.char) n++
            })
            if (n == 0) back.push(temp)
        }

    }
    return { iSt, st: st, detail: back }
}

export let checkRepeatChar = (iSt: string, pos: number): Repeat => {
    let back: Repeat = {
        check: false,
        char: iSt[pos],
        amount: -1
    }
    let loops = iSt.length
    for (let i = 0; i < loops; i++) {
        if (back.char == iSt[i]) back.amount++;
    }

    if (back.amount > 0) back.check = true
    return back

}

export let quickCheckString = (iSt: string): string => {
    let back: string = "";
    let loops = iSt.length
    for (let i = 0; i < loops; i++) {
        let n: number = 0
        for (let j = 0; j < loops; j++) {
            if (iSt[i] == iSt[j]) n++
            if (n > 1) break
        }
        if (n == 1) back = back + iSt[i]
    }
    return back
}

