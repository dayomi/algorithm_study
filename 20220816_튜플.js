// https://school.programmers.co.kr/learn/courses/30/lessons/64065

function solution(s) {
    var answer = [], tuple = [];
    
    // 문자열 파싱하여 Array 만들기
    s.substr(1, s.length - 2).split('},{').forEach((ss)=>{
        var element = [];
        ss.replace('}', '').replace('{', '').split(',').forEach((sss)=>{
            element.push(Number(sss));
        });
        tuple.push(element);
    })
    
    // Tuple 만들기
    tuple.sort(function(a, b){ return a.length - b.length;}) // 원소 길이별로 오름차순 정렬
    .forEach((t, i)=>{
        if(i == 0) answer.push(t[0]);
        else{
            t.forEach((tt , j)=>{ // 앞 원소에 없는 값을 answer에 넣기
                if(tuple[i-1].indexOf(tt) == -1) answer.push(tt);
        }) } });
    
    return answer;
}
