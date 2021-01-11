import { findPivot, findTarget } from "./search";
import { iArr } from "./test";

(async () => {

    console.log(findPivot(iArr))
    console.log(findTarget(iArr,0))
    console.log(findTarget(iArr,9))
})();