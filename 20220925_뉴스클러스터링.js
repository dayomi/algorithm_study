// https://school.programmers.co.kr/learn/courses/30/lessons/17677#
function solution(str1, str2) {
    var answer = 0;
    var a = [], b = [], ab = [], all = [];
    
    str1 = str1.toUpperCase();
    str2 = str2.toUpperCase();
    
    // 원소 나누기
    for(var i=0; i<str1.length - 1; i++){
        if( str1.charCodeAt(i) >= 65 && str1.charCodeAt(i) <= 90 &&
            str1.charCodeAt(i+1) >= 65 && str1.charCodeAt(i+1) <= 90){
            var e = str1[i] + str1[i+1];
            a.push(e);
        }
    }
    
    for(var i=0; i<str2.length - 1; i++){
        if(str2.charCodeAt(i) >= 65 && str2.charCodeAt(i) <= 90 &&
           str2.charCodeAt(i+1) >= 65 && str2.charCodeAt(i+1) <= 90){
            var e = str2[i] + str2[i+1];
            b.push(e);
        }
    }
    
    //console.log(a, b);
    
    // 자카드 유사도
    var aa = a.length < b.length ? a.slice() : b.slice(); // 원소 갯수 적은 것
    var bb = a.length < b.length ? b.slice() : a.slice(); // 원소 갯수 많은 것

    // 교집합 만들기
    aa.forEach((e)=>{
        var idx = bb.indexOf(e);
        if(idx != -1){
            ab.push(e);
            bb = [...bb.slice(0, idx), ...bb.slice(idx+1)];
        }
    });
    
    var bb = a.length < b.length ? b.slice() : a.slice();
    
    // aa를 차집합으로
    ab.forEach((e)=>{
        var idx = aa.indexOf(e);
        if(idx != -1){
            aa = [...aa.slice(0, idx), ...aa.slice(idx+1)];
        }
    });
    
    // 자카드 계산
    // 합집합
    all = all.concat(aa).concat(bb);
    
    if(all.length == 0) // 둘다 0인 경우 jaccard = 1
        answer = 65536;
    else{
        answer = Math.floor(ab.length / (all.length) * 65536); 
    }
    
    return answer;
}
