import { findNumbRepeat, findStringRepeat, firstDuplicate } from "./findFirstRepeat";
import { testArray, testArray2 } from "./test";

(async () => {

    console.log(findNumbRepeat(testArray))
    console.time("t1")
    console.log(findStringRepeat(testArray2))
    console.timeEnd("t1")
    console.log(firstDuplicate(testArray))
})();