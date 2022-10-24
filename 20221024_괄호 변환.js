//https://school.programmers.co.kr/learn/courses/30/lessons/60058
function solution(p) {
    var answer = '';
    
    function transition(p){
        if(p == '')
            return '';
        
         var u = '', v = '';
         var nl = 0, nr = 0;

        // u, v 분리
         for(var i=0; i<p.length; i++){
            p[i] == '(' ? nl++ : nr++;

            if(nl == nr){
                u = p.slice(0,i+1);
                v = p.slice(i+1);
                break;
            }
        }
        
        // "u"가 올바른 괄호 문자열이라면
        if(check(u)){
            return u.concat(transition(v));
        }
        
        // "u"가 올바른 괄호 문자열이 아니면
        else{
            var w = '(' + transition(v) + ')';
            u = u.slice(1, u.length - 1);
            var newu = '';
            for(var i=0; i<u.length; i++){
                if(u[i] == '(')
                    newu += ')';
                else
                    newu += '(';
            }
            return w.concat(newu);
        }
    }
    
    answer = transition(p);
    return answer;
}

// 균형잡힌 괄호문자열인지 확인
function check(w){
    var queue = [];
    var result = true;
    
    for(var i=0; i<w.length; i++){
        if(w[i] == '('){
            queue.push('(');
        }else{
            if(queue.length != 0){
                queue.pop();
            }else{
                result = false;
                break;
            }
        }
    }
    return result;
}
