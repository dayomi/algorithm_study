// https://school.programmers.co.kr/learn/courses/30/lessons/72412
// Binary Search 함수 사용

function solution(info, query) {
    var answer = [], scores = [], list = [], answers = [];
    var keys = [], keysList = [], scoreList = [];
    
    // 그룹에 넣기 
    info.forEach((inf, i)=>{
        var key = '';
        inf.split(' ').forEach((value, idx)=>{
            if(idx != 4) key += value;
            else {
                if(list[key] != void(0)) list[key].push(Number(value));
                else list[key] = [Number(value)];
                list[key].sort((a,b)=>a-b);
            }
        });
    });
    
    // 쿼리 진행
    query.forEach((q, i)=>{
        var language, job, career, soulfood, score; // 쿼리 값 생성
        var regex = / and/ig;
        var count = 0;
        q.replace(regex, "").split(' ').forEach((value, idx)=>{
            switch(idx){
                case 0: language = value; break;
                case 1: job      = value; break;
                case 2: career   = value; break;
                case 3: soulfood = value; break;
                case 4: score    = value; break;
            } 
        });
        
        makeKey(language, job, career, soulfood, '', 0);
        
        keys.forEach((key)=>{
           if(list[key] != void[0])
               count += findAbove(list[key], score);
        });
        keys = [];
        answer.push(count);
    });
    
    /* binary Search 함수 추가해서 해결했음 ㅠㅠ */
    function findAbove(l, num) {
        let start = 0;
        let end = l.length-1;
        //let index = 0;
        while (start<end) {
            let mid = start + Math.floor((end-start)/2)
            if (l[mid] == num) {
                start = mid;
                break;
            }
            else if (l[mid] > num)
                end = mid - 1;
            else {
                start = mid + 1;
            }
        }

        while (l[start] >= num || start >= l.length) {
            start--;
        }
        return l.length - start -1;
    }   
    
    // key 만드는 함수
    function makeKey(language, job, career, soulfood, key, idx){
        if(idx == 0){
            if(language == '-'){
                makeKey(language, job, career, soulfood, 'cpp', 1);
                makeKey(language, job, career, soulfood, 'java', 1);
                makeKey(language, job, career, soulfood, 'python', 1);
            }else
                makeKey(language, job, career, soulfood, language, 1);
        }else if(idx == 1){
            if(job == '-'){
                makeKey(language, job, career, soulfood, key+'backend', 2);
                makeKey(language, job, career, soulfood, key+'frontend', 2);
            }else
                makeKey(language, job, career, soulfood, key+job, 2);
        }else if(idx == 2){
            if(career == '-'){
                makeKey(language, job, career, soulfood, key+'junior', 3);
                makeKey(language, job, career, soulfood, key+'senior', 3);
            }else
                makeKey(language, job, career, soulfood, key+career, 3);
        }else if(idx == 3){
            if(soulfood == '-'){
                makeKey(language, job, career, soulfood, key+'chicken', 4);
                makeKey(language, job, career, soulfood, key+'pizza', 4);
            }else
                makeKey(language, job, career, soulfood, key+soulfood, 4);
        }else if(idx == 4){
            if(keys.indexOf(key) == -1) keys.push(key);
            return;
        }
    }
    return answer;
}
