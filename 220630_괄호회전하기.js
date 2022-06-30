// https://programmers.co.kr/learn/courses/30/lessons/76502
function solution(s) {
    var answer = 0;
    var l = [...s];
    
    for(var i=0; i<s.length; i++){
        l = rotate(l);          // 회전하고
        if(check(l)) answer++;  // 올바른 괄호문자열이면 answer+1
    }
    
    // 회전시키는 함수
    function rotate(l){
        return [...l.slice(1), l[0]];
    }
    
    // 올바른 괄호문자열 체크
    function check(l){
        var q = [], result= true;
        
        l.forEach((n, i)=>{
            if(n == '(')
                q.push('(');
            else if(n == '[')
                q.push('[');
            else if(n == '{')
                q.push('{');
            else if(n == ')'){
                if(q.pop() == '(');
                else result = false;
            }
            else if(n == ']'){
                if(q.pop() == '[');
                else result = false;
            }
            else{
                if(q.pop() == '{');
                else result = false;
            }
            
            if(!result) return;
        }); 
        
        if(q.length != 0) result = false;
        
        return result;
    }
    
    return answer;
}
