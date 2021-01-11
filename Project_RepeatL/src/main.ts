import {quickCheckString, detailCheckString } from "./checkRepeat";
import { testString } from "./test";

(async () => {

    console.time("t3")
    console.log(detailCheckString(testString))
    console.timeEnd("t3")
    console.time("t4")
    console.log(quickCheckString(testString))
    console.timeEnd("t4")
})();