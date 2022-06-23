/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var max_len = 0, used=[], used_idx = [], substr = "";
    
    [...s].forEach(function(c, i){
        var idx = c.charCodeAt(0);
        
        // 기존에 반복되지 않은 문자일 경우
        if(used.indexOf(c) == -1){
            // used List 에 넣음
            used.push(c); 
            // used idx List에 넣음
            used_idx[c] = i;
            // substr 생성
            substr += c ; 
        }
        // 기존에 반복된 문자가 나올 경우
        else{
            // 지금까지의 substr length 계산
            max_len = max_len > substr.length ? max_len : substr.length;
            // 바로 앞 반복된 문자의 index찾기
            var bidx = used_idx[c];
            // 바로 앞 반복된 문자 이후부터 지금까지로 substr 초기화
            substr = s.substr(bidx+1, i-bidx);
            // used List 초기화
            used = [...substr];
            // used idx List에 넣음
            used_idx[c] = i; 
        }
        
    });
    
    // 최종 substr의 max여부 확인
    max_len = max_len > substr.length ? max_len : substr.length;
    
    return max_len;
};
