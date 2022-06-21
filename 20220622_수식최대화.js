function solution(expression) {
    var answer = 0;
    var priority = ['*-', '*+', '+*', '+-', '-*', '-+']; // 경우의 수 
    var exprs = [];
    
    var s = "";
    // expression을 배열로 만들기
    for(var i=0; i<expression.length; i++){
        var e = expression[i];
        if(i != 0 && (e == '+' || e == '-' || e == '*')){
            exprs.push(parseInt(s));
            exprs.push(e);
            s = "";
        }
        else{
            s += e;
            if(i == expression.length - 1){
                exprs.push(parseInt(s));
            }
        }
    }
    
    /* expression을 expr 배열로 만들기
       [ 100, '-', 200, '*', 300, '-', 500, '+', 20 ]   
    */
    
    priority.forEach((ps)=>{ // 연산자 순서별로 계산
        var nexpr = exprs.slice();  // 깊은 복사
        
        [...ps].forEach((p)=>{
            nexpr = merge(nexpr, p); // 우선순위 연산자부터 수식 계산하기
        });
        
        var value = Math.abs(eval(nexpr.join(""))); // 계산된 배열을 문자열로 치환하고 수식계산 (절대값)
        if(value > answer) // 최대값 찾기
            answer = value;
    });
    
    function merge(ex, o){
        var idx = ex.indexOf(o); // 찾는 연산자의 1번째 index 찾기
        if(idx == -1)
            return ex;
        
        // 연산자 계산
        var get = ex.splice(idx-1, 3); // 먼저 계산할 거 빼고
        ex = [...ex.slice(0, idx-1), eval(get.join("")), ...ex.slice(idx-1)]; // 계산해서 배열 합치기
        return merge(ex, o); // 재귀를 통해 모두 진행
        
        /* Ex) '-'부터 계산하는 경우
           [ 100, '-', 200, '*', 300, '-', 500, '+', 20 ]   
        -> [ -100 , '*', -200, '+', 20]
        */
    }
    
    return answer;
}


