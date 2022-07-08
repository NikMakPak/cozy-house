function getVal(arr, key) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].name == key) { return arr[i]; }
    }
}
export default getVal;