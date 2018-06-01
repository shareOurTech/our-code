let arr = [99, 6, 4, 2, 2, 465, 7, 23, 1, 2, 9, 78, 6, 9, 5, 5, 64, 6, 37, 123, 68, 4, 3, 42, 5, 45, 12, 69, 87, 96, 7, 4, 5, 2, 42, 2, 6, 84, 5];
function quickSort(arr) {
    console.log(JSON.stringify(arr))
    if (arr.length <= 1) return arr;
    let amongIndex, among, left, right, oleft, oright;
    amongIndex = parseInt(arr.length / 2);
    among = arr[amongIndex];
    oleft = arr.splice(0, amongIndex);
    oright = arr.splice(1, arr.length);
    left = [];
    right = [];
    for (let i = 0; i < oleft.length; i++) {
        if (oleft[i] < among) {
            left.push(oleft[i]);
        } else {
            right.push(oleft[i]);
        }
    }
    for (let i = 0; i < oright.length; i++) {
        if (oright[i] < among) {
            left.push(oright[i]);
        } else {
            right.push(oright[i]);
        }
    }
    return quickSort(left).concat([among], quickSort(right));

}
let result = quickSort(arr);