// https://school.programmers.co.kr/learn/courses/30/lessons/17687

function solution(n, t, m, p) {
    var answer = '', all = '';
    
    // m*t 까지 부르는 문장 다 구하기
    for(var i=0; i<=m*t; i++)
        all += i.toString(n).toUpperCase();
    
    // 튜브가 불러야하는 숫자 찾기
    for(var i=0; i<all.length; i++){
        if((i % m) + 1 == p){
            answer += all[i];
            if(answer.length == t)
                break;
        }
    }
    
    return answer;
}
