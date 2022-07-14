// https://school.programmers.co.kr/learn/courses/30/lessons/17684

  function solution(msg) {
    var answer = [], dictionary = [];
    
    // dictionary 초기화
    for(var i=65; i<91; i++)
        dictionary.push(String.fromCharCode(i));
    
    // msg 차례대로 읽기 
    for(var i=0; i<msg.length; i++){
        for(var j=msg.length; j>i; j--){
            var temp = msg.substring(i,j);
            var idx = dictionary.indexOf(temp);
            if(-1 != idx){ // 사전에 있는지 확인
                answer.push(idx+1);
                var newdict = msg.substring(i, j+1);
                dictionary.push(newdict);
                i = j-1; // 다음 시작 위치 지정
            }
        }
    }
    
    return answer;
}
