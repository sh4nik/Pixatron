function getArrayString(xl, yl, rleString) {
    var rleStr = rleString.replace(/\s+/g, '');
    var rle = rleStr.split('');
    var rlen = getNormalizedRle();

    var outArr = getDataSet();
    printArray(getData());

    function printArray(arr) {
        var str = '';
        str += '[';
        for (var y = 0; y < arr.length; y++) {
            str += '[';
            for (var x = 0; x < arr[y].length; x++) {
                str += arr[y][x];
                str += x === arr[y].length - 1
                    ? ''
                    : ',';
            }
            str += ']';
            str += y === arr.length - 1
                ? ''
                : ',';
        }
        str += ']';
        console.log(str);
    }

    function getData() {
        for (var y = 0; y < yl; y++) {
            for (var x = 0; x < xl; x++) {
                var token = rlen.shift();
                if (token === 'o') {
                    outArr[y][x] = 1;
                    x === xl - 1
                        ? rlen.shift()
                        : null;
                } else if (token === '$') {
                    break;
                }
            }
        }
        return outArr;
    }

    function getDataSet() {
        var nullDataSet = [];
        for (var y = 0; y < yl; y++) {
            nullDataSet[y] = new Array(xl).fill(null);
        }
        return nullDataSet;
    };

    function getNextToken() {

        var out = '';

        while (rle.length > 0) {

            var char = rle[0];
            if (!out.length) {
                out += rle.shift();
                if(!isNumeric(char)) {
                    break;
                }
            } else if (isNumeric(char)) {
                out += rle.shift();
            } else {
                break;
            }
        }

        return out;
    }

    function getNormalizedRle() {
        var out = [];
        while (rle.length > 0) {
            var token = getNextToken();
            if (isNumeric(token)) {
                var repeatChar = getNextToken();
                for (var x = 0; x < token; x++) {
                    out.push(repeatChar);
                }
            } else {
                out.push(token);
            }
        }
        return out;
    }

    function isNumeric(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    }
}