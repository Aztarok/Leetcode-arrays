function anagram(arr) {
    let final = [];
    let results = {};
    for (let i = 0; i < arr.length; i++) {
        let current = arr[i];
        let key = current.split("").sort();
        if(results[key] === undefined) {
            results[key] = [current];
        } else {
            results[key].push(current);
        }
    }
    for (let key in results) {
        final.push(results[key]);
    }
    

    return final;
}

let array = ["eat", "tea", "tan", "ate", "nat", "bat"];

console.log(anagram(array));