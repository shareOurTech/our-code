function FindSubStr(str) {
    Array.prototype.quchong = function () {
        let arr = [];
        this.forEach((i) => {
            if (arr.indexOf(i) === -1) {
                arr.push(i);
            }
        })
        return arr;
    }
    let arr = str.split('');
    let result = {
        len: 0,
        str: '',
        start: 0,
        end: 0
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
    return result;
}
// let str = 'sjhiuataqaigdosagdghoiqwasfduwgbaadgsfnkjabgiqefajkbd';
export default FindSubStr;
