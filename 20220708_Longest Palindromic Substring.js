// https://leetcode.com/problems/longest-palindromic-substring/

var longestPalindrome = function(s) {
    var len = s.length, result = "";
    
    if(len == 1)
        return s;
    
    // 부분문자열 찾기 
    for(var i=0; i<len; i++){
        for(var j=i; j<len; j++){
            if(s[i] == s[j]){ // 맨 앞 과 맨 끝이 같을 때 확인
                var substr = s.slice(i, j+1);
                // palindromic + 최대길이인지 확인
                if(checkPalindromic(substr) && (result.length < substr.length)){
                    result = substr;
                    if(result.length == len) return result; // 문자열 길이와 같으면 여기서 끝
                }
            }
        }
    }
    
    return result;

    // palindromic 체크하기
    function checkPalindromic(str){
        var mid = Math.floor(str.length / 2);
        for(var i=0; i<mid; i++){
            if(str[i] != str[str.length - 1 - i]) // 가운데까지 차례대로 비교
                return false;
        }
        return true;
    }
};
