/**
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * You can return the answer in any order.
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums: number[], target: number) => {
    const numsSorted = [...nums].sort((a,b) => a - b);
    for (let i = 0; i < numsSorted.length; i++) {
        let finishLoop = false;
        for (let j = 0; j < numsSorted.length && !finishLoop; j++) {
            if (i !== j) {
                const sum = numsSorted[i] + numsSorted[j];
                if (sum > target){
                    finishLoop = true;
                }
                if (sum === target) {
                    return nums.reduce((acc: number[], current: number, index: number) => {
                        if (current === numsSorted[i]) {
                            const areEquals = numsSorted[i] === numsSorted[j];
                            if (!areEquals || acc.length === 0) {
                                acc.push(index);
                                return acc;                            
                            }
                        }
                        if (current === numsSorted[j]) {
                            acc.push(index); 
                            return acc;
                        }
                        return acc;
                    }, []);
                    break;
                }
            }
        }
    }
};

export default twoSum;
