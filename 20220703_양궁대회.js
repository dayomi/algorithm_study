function solution(n, info) {
    var answer = [];
    var record = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; // 라이언의 기록
    var max = -1;
    
    get_posibility(record, info, 0, n);
    if(max == -1)
        answer = [-1];
    
    // 경우의 수 구하기
    function get_posibility(record, info, s, arrow){
        if(s == 10){
            var nr = record.slice();
            if(arrow > 0){
                nr[s] = arrow;
            }
            
            var g = complete_score_gap(info, nr);
            if(g >= max){
                if(max == g){
                    // 동일인 경우 더 낮은 것을 리턴
                    if(check(answer, nr) == 0) 
                        return;
                }
                max = g;
                answer = nr;
            }
            return;
        }
        
        // 점수획득하는 경우
        if(arrow > info[s]){
            var wr = record.slice();
            wr[s] = info[s] + 1;
            var na = arrow - wr[s];
            get_posibility(wr, info, s+1, na);
        }
        // 점수잃는 경우
        var lr = record.slice();
        lr[s] = 0;
        get_posibility(lr, info, s+1, arrow);
    }
    
    // 점수 차이 구하기
    function complete_score_gap(info, record){
        var a_score = 0, l_score = 0;
        for(var i=0; i<11; i++){
            if(info[i] >= record[i]){
                if(info[i] != 0)
                    a_score += (10-i);
            }else{
                if(record[i] != 0)
                    l_score += (10-i);
            }
        }
        return a_score < l_score ? (l_score - a_score) : -1;
    }
    
    // 더 낮은 점수를 더 맞힌 경우 return
    function check(a, b){
        var sum_a = 0, sum_b = 0;
        for(var i=a.length-1; i>=0; i--){
            sum_a += a[i];
            sum_b += b[i];
            if(sum_a > sum_b)
                return 0;
            else if(sum_b > sum_a)
                return 1;
        }
    }
    
    return answer;
}
