function solution(name) {
    var answer = 0;
    
    var move = [], go = [];
    var len = name.length;
    var ud_move = 0, lr_move = 0; // 상하 움직일 횟수 + 좌우 움직일 횟수
    
    //알파벳 상하, 좌우 움직임을 위해 숫자로 초기화
    for(var i=0; i<len; i++){
        var c = name.charCodeAt(i)-65;
        move[i] = c < 13 ? c : 26 - c ;
        go[i] = c == 0 ? 0 : 1; // 좌우 이동이 필요한 위치에 1로 표시
        ud_move += move[i]; // 상하 이동 갯수 총 합 
    } 
    
    var lr_move = search(0, 0, go)
    answer = ud_move + lr_move; // 상하 + 좌우 움직임 값의 합이 answer
        
    // p : 시작점, mv : 현재까지 움직인 횟수, go : 좌우이동 필요한 위치 배열
    function search(p, mv, go){
        go[p] = 0 // 시작점으로 왔으므로 0으로 변경
        
        if (isComplete(go)){ // 좌우이동 필요한 알파벳이 없다면
            return mv; // 지금까지 좌우이동 값을 return
        }
        
        var left, right, lm , rm;
        var go_l = [], go_r = [];
                
        arrCopy(go_l, go); // go_l : 왼쪽 이동 시 체크할 배열
        arrCopy(go_r, go); // go_r : 오른쪽 이동 시 체크할 배열
        /* 
        ※ 이런 지도 체크하듯이 방문점 확인하는 부분이 있는 경우
        각각 방향 가능성에 따른 방문점 체크가 필요
        */
        
        
        for(var i=1; i<len; i++){
            // 오른쪽으로 1씩 이동 (마지막 문자 넘어가면 첫번째 문자로 돌아가기)
            right = (p + i) > (len - 1) ? (i + p - len) : (p + i);
            
            if ( go[right] == 1){ // A가 아니라서 이동해야 하는 문자라면
                rm = mv + i; // 현재까지 이동횟수 + 오른쪽으로 이동 시 횟수
                break;
            }
        }
        
        for(var i=1; i<len; i++){
            // 왼쪽으로 1씩 이동 (첫번째 문자보다 내려가면 마지막 문자로 돌아가기)
            left = p - i < 0 ? p - i + len : p - i;
            
            if (go[left] == 1){
                lm = mv + i ; // 현재까지 이동횟수 + 왼쪽으로 이동 시 횟수
                break;
            }
        }
        
        // 최소 인 것을 RETURN
        return Math.min(search(left, lm, go_l),  search(right, rm, go_r))
    }
    
    // 모두 바꿨는지 체크하는 함수
    function isComplete(go){
        var isComplete = true;
        for (var i=0; i<len; i++){
            if (go[i] == 1)
                isComplete=false;
        }
        return isComplete
    }
    
    // 배열 복사 함수
    function arrCopy(a, b){
        for(var i=0; i<b.length; i++){
            a[i] = b[i];
        }
    }
    
    return answer;
}