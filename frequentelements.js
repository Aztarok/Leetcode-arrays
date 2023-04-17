let topKFrequent = (nums, k) => {
    let final = [];
    let results = {};
    let mid = [];
    for (let i = 0; i < nums.length; i++) {
        let current = nums[i];
        if (results.hasOwnProperty(current)) {
            results[current] += 1;
        } else {
            results[current] = 1;
        }
    }
    for (let key in results) {
        mid.push([key, results[key]]);
    }

    mid = mid.sort((a, b) => b[1] - a[1]);
    for (let j = 0; j < k; j++) {
        final.push(parseInt(mid[j][0]));
    }

    return final;
};

let array = [1, 2, 3, 3, 4];
let target = 3;
console.log(topKFrequent(array, target))