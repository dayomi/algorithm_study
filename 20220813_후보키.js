// https://school.programmers.co.kr/learn/courses/30/lessons/42890#
// 2시간 걸림 

function solution(relation) {
    var answer = 0;
    var candidate = [];
    var r = relation.length, c = relation[0].length;
    var cols = Array.from({length: c}, (v, i) => i);
    
    for(var i=1; i<=c; i++){
        getPerms(cols, i).forEach((l)=>{
            var key = l.slice(), values = [];
            var isCandidate = true; // 중복값 있는지 여부
            
            // row 들에 대해 c 의 조합이 후보키가 될 수 있는지 확인
            for(var j=0; j<r; j++){
                var row = relation[j], new_values = [], isInValue = false;
                
                // 컬럼에 따른 값
                for(var k=0; k<key.length; k++)
                    new_values.push(row[key[k]]); 
                
                // values에 있는 값인지 여부 확인
                values.forEach((v)=>{
                    if(isSameArray(v, new_values))
                        isInValue = true;
                });
                if((values.length == 0) || values.length != 0 && ! isInValue)
                    values.push(new_values);
                else
                    isCandidate = false; // 중복값 있는 경우 isCandidate = false;
            }
            
            // 최소 조건 확인 
            if(isCandidate &&
              ((candidate.length == 0) || candidate.length != 0 && ! isMinimum(key, candidate)))
                candidate.push(key);
        });
    }
    
    // 최소성만족여부
    function isMinimum(key, candidate){ 
        var include = false;
        for(var i=0; i<candidate.length; i++){
            var can = candidate[i];
            include = can.every(e => key.includes(e));
            if(include) break;
        }
        return include;
    }
    
    // 같은 array인지 판별 함수
    function isSameArray(a, b){ 
        for(var i=0; i<a.length; i++){
            if(a[i] != b[i]) return false;
        }
        return true;
    }
    
    // 조합 경우의 수 만들기
    function getPerms(arr, n){
        var result = [];
        if(n == 1) return arr.map((e)=>[e]);
        
        arr.forEach((f, i, o)=>{
            var rest = o.slice(i+1);
            var perms = getPerms(rest, n-1);
            var attached = perms.map((e)=>[f, ...e]);
            result.push(...attached);
        });
        return result;
    }
    
    return candidate.length;
}
