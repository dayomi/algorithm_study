function solution(number, k) {
    var answer = '';
    // 자릿수에서 k를 제거한다 = 기존 자릿수 - k의 자릿수를 목표로함 
    var target_length = number.length - k; 
    
    while(target_length != 0){
        var index = 0, max =0;
        // 맨 앞자리에 가능한 최대의 수를 찾기
        // Ex) "1924"의 경우 2자리가 되기 위해서 맨 앞은 "1", "9" 중 최대값이 되야한다
        //     최대값을 찾을 후보 인덱스는 [0 ~ (현재 문자열 길이 - 목표 자릿수 + 1)]
        for(var i=0; i<(number.length - target_length + 1); i++){
            if(max < number[i]){
                max = number[i]; 
                index = i;
                
                // ------------------ 추가  ------------------
                // : 9일 때는 무조건 최대값으로 더 비교하지 않고 패스
                // (효율을 위해 무조건 필요)
                if(number[i] == '9')  
                   break;
                // ------------------------------------------
            }
        }

        // answer에 최대값을 더해준다
        answer += max; 
        
        // 최대값 다음부터의 문자열로 변경 Ex) "1924" -> "9가 최대값" -> "24"
        number = number.slice(index + 1); 

        // 목표 자릿수 하나 감소
        // Ex) "1924" 에서 2자리로 만들기였다면 / "24"에서 1자리 만들기로 변경
        target_length --;  
        
        // 목표 자릿수와 남아있는 문자열의 갯수가 같다면 더 돌지 않고 이어붙임
        if(target_length == number.length){ 
            answer = answer + number;
            break;
        }
    }
    
    return answer;
}