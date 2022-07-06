// https://leetcode.com/problems/reverse-integer/
var reverse = function(x) {
    var isNegative = false, reversed = String(x).split("").reverse().join("");
    if(reversed.indexOf('-') != -1){          // 음수 여부 확인
        isNegative = true;
        reversed = reversed.replace('-', '');
    }
    
    // 범위 벗어나는지 확인
    if((isNegative && Number(reversed) > Math.pow(2,31)) || (!isNegative && Number(reversed) >= Math.pow(2,31)))
        return 0;
    else
        return isNegative ? Number(reversed)*(-1) : Number(reversed);
};
