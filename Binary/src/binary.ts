export let stringToBinary = (input: string) => input.split("").map(char => char.charCodeAt(0).toString(2)).join(" ")
export let charToBinary = (char: string) => char.charCodeAt(0).toString(2)

export let binaryToString = (input: string) => input.split(" ").map(bit => String.fromCharCode(parseInt(bit, 2))).join("")
export let binaryToChar = (bit: string) => String.fromCharCode(parseInt(bit, 2))

export let translateBinary = (input: string, toBinary: boolean) => input.split(toBinary ? "" : " ").map(char => toBinary ? charToBinary(char) : binaryToChar(char)).join(toBinary ? " " : "")

export let randomBit = () => {
    let bit: number = Math.round(Math.random() * 127)
    while (bit < 31 || bit > 128) bit = Math.round(Math.random() * 127)
    return (bit.toString(2))
}

export let randomBitString = (length: number) => {
    let back: string = ""
    for (let i = 0; i < length; i++) back = back.concat(" ", randomBit())
    return back
}
