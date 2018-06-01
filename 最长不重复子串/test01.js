let str = 'sjhiuataqaigdosagdghoiqwasfduwgbaadgsfnkjabgiqefajkbd';

let arr = str.split('');

let result = {
    len: 0,
    str: '',
    start: 0,
    end: 0
}
Array.prototype.quchong = function () {
    let arr = [];
    this.forEach((i) => {
        if (arr.indexOf(i) === -1) {
            arr.push(i);
        }
    })
    return arr;
}
for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
        let childArr = arr.slice(i, j);
        let afterQuchong = childArr.quchong();
        let len = afterQuchong.length;
        if (len === childArr.length && result.len < len) {
            result = {
                len: len,
                str: afterQuchong.join(''),
                start: i,
                end: j
            }
        }
    }
}
console.log(JSON.stringify(result));