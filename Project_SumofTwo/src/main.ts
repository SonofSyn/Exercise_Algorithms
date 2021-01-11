import { testArrayA, testArrayB } from "./test";
import { findQuickCombination, addAllCombinations, findAllCombination } from "./sumofTwo";




(async () => {
    console.log(addAllCombinations(testArrayA,testArrayB))
    console.log(findAllCombination(addAllCombinations(testArrayA,testArrayB),42))
    console.log(findQuickCombination(testArrayA,testArrayB,42))

})();