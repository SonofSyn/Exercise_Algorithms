export let checkIfPalindrom = (palindrom: string): boolean => {
    let length: number = palindrom.length - 1;
    let back = true;
    for (let i = 0; i <= length; i++) {
        if (palindrom[i] != palindrom[length - i]) back = false
    }
    return back
}

export let checkPossiblePalindrom = (palindrom: string): { options: number[], doubleTyp: boolean[] } => {
    let back: number[] = []
    let backTyp: boolean[] = []
    let length: number = palindrom.length - 1
    for (let i = 0; i <= length; i++) {
        if (palindrom[i] == palindrom[i + 1]) {
            back.push(i)
            backTyp.push(true)
        }
        else if (palindrom[i - 1] == palindrom[i + 1]) {
            back.push(i)
            backTyp.push(false)
        }

    }
    return { options: back, doubleTyp: backTyp }
}

export let checkForLongestPalindrom = (palindrom: string): { Palindrom: string, Length: number } => {
    let back: string = ""
    let temp: string = ""
    let boundLength: number = 0
    let backLength: number = 0
    let length: number = palindrom.length - 1
    let possibilities: { options: number[], doubleTyp: boolean[] } = checkPossiblePalindrom(palindrom)

    possibilities.options.map((e, ixE) => {
        boundLength = e
        if (e > length - e) {
            boundLength = length - e
        }

        let bound: number = 1
        if (possibilities.doubleTyp[ixE]) {
            bound = 2
            if (e == 0) {
                back = palindrom.substring(0, 2)
                backLength = back.length
            }
        }
        for (let i = 0; i < boundLength; i++) {
            temp = palindrom.substring(e - i, e + i + bound)
            if (checkIfPalindrom(temp)) {
                if (temp.length > backLength) {
                    back = temp;
                    backLength = back.length
                }
            }
        }

    })
    return { Palindrom: back, Length: backLength }
}

export let longestPalindrome = (st: string): string => {
    
    let length = st.length
    let start = 0
    let end = 0

    if (st == null || length < 1) return ""

    for (let i = 0; i < length; i++) {
        let len1 = expandFromMiddle(st, i, i,length)
        let len2 = expandFromMiddle(st, i, i + 1,length)
        let len = Math.max(len1, len2)
        if (len > end - start) {
            start = i - ((len - 1) / 2)
            end = i + (len / 2)
        }
    }
    return st.substring(start, end + 1)
}

export let expandFromMiddle = (st: string, left: number, right: number,length:number):number => {
    if (st == null || left > right) return 0

    while (left >= 0 && right < length && st.charAt(left) == st.charAt(right)) {
        left--
        right++
    }
    return right - left - 1
}