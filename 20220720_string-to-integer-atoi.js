// https://leetcode.com/problems/string-to-integer-atoi/

var myAtoi = function(s) {
    var min = Math.pow(2, 31) * (-1), max = Math.pow(2, 31) - 1, ns = '';
    
    for(var i=0; i<s.length; i++){
        if(s.charCodeAt(i) >= 48 && s.charCodeAt(i) <= 57){ // 숫자인 경우
            ns += s[i];
        }else{ // 그 외의 경우
            if(ns.length != 0) // 숫자 존재
                break;
            else{ // 숫자미존재
                if(s[i] == ' ') // 공백
                    continue;
                else if(s[i] == '-' || s[i] == '+') // 기호
                    ns += s[i];
                // 둘다 아닌 경우 break
                else
                    break;
            }
        }
    }
    ns = Number.parseInt(ns);
    
    ns = ns < min ? min : ns;
    ns = ns > max ? max : ns;
    ns = Number.isNaN(ns) ? 0 : ns;
    
    return ns;
};
