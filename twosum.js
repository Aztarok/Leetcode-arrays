let twoSum = function(nums, target) {
    let left = 0;
    let right = nums.length;
    let sum = [];
    for (let i = 0; i < nums.length; i++) {
        let currentFirst = nums[i];
        for (let j = i+1; j < nums.length; j++) {
            let currentSecond = nums[j];
            if (currentFirst + currentSecond === target) {
                sum.push(i, j);
            }
        }
        
    }
    return sum;
};

let nums = [2, 7, 11, 15];
let target = 9;

console.log(twoSum(nums, target));