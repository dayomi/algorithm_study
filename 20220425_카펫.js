function solution(brown, yellow) {
    var answer = [];
    var measure = new Set();
    
    // yellow의 약수 구하기
    for(var i=1; i<=yellow; i++){
        if(yellow % i == 0){
            // 가운데까지만 구함 ex) [1,2,3] 상태에서 4일 때 3이 있으므로 중지
            if(measure.has(yellow/i)) 
                break;
            measure.add(i);
        }
    }
    
    // 약수를 차례대로 가로길이로 설정해서 brown의 갯수랑 맞는지 비교
    [...measure].forEach((n)=>{
        var m = yellow / n;  // m = 가로길이  n = 세로길이
        // brown의 갯수는 (yellow가로길이+2 * yellow새로길이+2 - yellow전체갯수)
        if(((m+2)*(n+2)-yellow) == brown){
            return answer.push(m+2, n+2);
        }
    });
    
    return answer;
}