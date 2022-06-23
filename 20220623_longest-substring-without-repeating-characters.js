var lengthOfLongestSubstring = function(s) {
    var max_len = 0, used=[], used_idx = [], substr = "";
    
    [...s].forEach(function(c, i){
        var idx = c.charCodeAt(0);
        
        // 기존에 반복되지 않은 문자일 경우
        if(used.indexOf(c) == -1){
            used.push(c);               // used List 에 넣음
            used_idx[c] = i;            // used idx List에 넣음
            substr += c ;               // substr 생성
        }
        // 기존에 반복된 문자가 나올 경우
        else{
            max_len = max_len > substr.length ? max_len : substr.length;    // 지금까지의 substr length 계산
  
            var bidx = used_idx[c];             // 바로 앞 반복된 문자의 index찾기
            substr = s.substr(bidx+1, i-bidx);  // 바로 앞 반복된 문자 이후부터 지금까지로 substr 초기화
            used = [...substr];                 // used List 초기화
            used_idx[c] = i;                    // used idx List에 넣음
        }
        
    });
    
    max_len = max_len > substr.length ? max_len : substr.length; // 최종 substr의 max여부 확인
    
    return max_len;
};
