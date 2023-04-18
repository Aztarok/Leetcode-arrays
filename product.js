let productExceptSelf = (nums) => {
    let result = [];
    let left = [];
    let right = [];
    let firstValue = 1;
    let secondValue = 1;
    let lIndex = -1;
    let rIndex = nums.length - 2;
    for (let i = 0; i < nums.length; i++) {
        firstValue = firstValue * nums[i];
        left.push(firstValue);
    }
    for (let j = nums.length-1; j > -1; j--) {
        secondValue = secondValue * nums[j];
        right.push(secondValue);
    }

    for (let y = 0; y < nums.length; y++) {
        let ans = (lIndex == -1 ? 1 : left[lIndex]) *
        (rIndex == -1 ? 1 : right[rIndex]);
        result.push(ans);
        rIndex--;
        lIndex++;
    }

    return result;
}

let arr = [1, 2, 3, 4];

console.log(productExceptSelf(arr));
