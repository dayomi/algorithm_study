function solution(k, dungeons) {
    var answer = -1;
    var visited = new Array(dungeons.length);
    visited.fill(false);
    
    adventure(visited, 0, k);
    
    function adventure(tv, tr, tk){
        var canVisit = false;
        var visitList = [];
        
        // 방문가능한 던전 확인 후 list에 넣기
        tv.forEach((b, i)=>{
            if(!b && dungeons[i][0] <= tk && tk >= dungeons[i][1]){
                canVisit = true;
                visitList.push(i);
            }
        });
        
        // 방문 가능한 곳 없으면 return
        if(canVisit == false) return tr;
    
        visitList.forEach((idx)=>{
            var nv = tv.slice();
            nv[idx] = true;
            
            //피로도 및 방문횟수 계산
            var ntr = tr + 1, ntk = tk - dungeons[idx][1];
            answer = answer < adventure(nv, ntr, ntk) ? adventure(nv, ntr, ntk) : answer; // 재귀로 진행
        })
    }
    
    return answer;
}
