import { binaryToString, randomBit, randomBitString, charToBinary, stringToBinary, translateBinary } from "./binary"

    ; (async () => {
        // console.log(stringToBinary("Radium ist dank seiner besonderen Eigenschaften in der Medizin eines der kostbarsten Elemente"))
        // console.log(binaryToString(stringToBinary("Hallo ich bin ein Roboter")))
        console.log(binaryToString(randomBitString(12)))
        console.log(translateBinary("Hallo ich bin ein roboter", true))

    })();