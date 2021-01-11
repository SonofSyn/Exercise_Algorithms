import { testArr } from "./test";
import { determinLongestSubBound, findLongestSub, longestSub } from "./findArr";

(async () => {
    console.log(determinLongestSubBound(11,testArr))
    console.log(determinLongestSubBound(12,testArr))
    console.log()
    console.log(findLongestSub(12,testArr))
    console.log()

    console.time("t1")
    findLongestSub(12,testArr)
    findLongestSub(12,testArr)
    findLongestSub(12,testArr)
    findLongestSub(12,testArr)
    findLongestSub(12,testArr)
    findLongestSub(12,testArr)
    findLongestSub(12,testArr)
    findLongestSub(12,testArr)
    findLongestSub(12,testArr)
    findLongestSub(12,testArr)
    console.timeEnd("t1")


    console.time("t2")
    longestSub(12,testArr)
    longestSub(12,testArr)
    longestSub(12,testArr)
    longestSub(12,testArr)
    longestSub(12,testArr)
    longestSub(12,testArr)
    longestSub(12,testArr)
    longestSub(12,testArr)
    longestSub(12,testArr)
    longestSub(12,testArr)
    console.timeEnd("t2")
    
    console.log(longestSub(12,testArr))
})();