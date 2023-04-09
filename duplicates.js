let containsDuplicate = function(nums = []) {
    let results = {};
    let check = false;
    nums.map((value) => {
        if (!results.hasOwnProperty(value)) {
            results[value] = 1;
        } else {
            check = true;
        }
    });

    return (check ? true : false);
}

let nums = [1, 2, 3, 4, 3];

console.log(containsDuplicate(nums));