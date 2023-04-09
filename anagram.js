let isAnagram = function(s, t) {
    let results = s.split("").sort().join();
    let results2 = t.split("").sort().join();

    if (results === results2) {
        return true;
    } else {
        return false;
    }
};

let s = "rat";
let t = "car";

console.log(isAnagram(s, t));