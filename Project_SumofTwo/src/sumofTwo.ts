export let addAllCombinations = (iArrA: number[], iArrB: number[]): Combinations => {

    let back: Combinations = [{ firstElement: 0, secondElement: 0, sum: 0 }]


    iArrA.forEach(element => {
        iArrB.forEach(element2 => {
            back.push({ firstElement: element, secondElement: element2, sum: element + element2 })
        })
    });
    return back
}

export let findQuickAllCombinations = (iArrA: number[], iArrB: number[], value: number): Solution[] => {
    let back: Solution[] = []
    iArrA.forEach(element => {
        iArrB.forEach(element2 => {
            if (value == element + element2) back.push({ possible: true, firstElement: element, secondElement: element2 })
        })
    });
    return back
}

export let findAllCombination = (combs: Combinations, value: number): Solution[] => {
    let back: Solution[] = []
    combs.map(e => {
        if (e.sum == value) back.push({ possible: true, firstElement: e.firstElement, secondElement: e.secondElement })
    })
    return back

}

export let findQuickCombination = (iArrA: number[], iArrB: number[], value: number): Solution => {
    let back: Solution = { possible: false, firstElement: 0, secondElement: 0 }
    iArrA.forEach(element => {
        iArrB.forEach(element2 => {
            if (value == element + element2) {
                back = { possible: true, firstElement: element, secondElement: element2 }
            }

        })
    });
    return back
}