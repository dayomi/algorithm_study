function solution(id_list, report, k) {
    var answer = [];
    
    // ID별 통지횟수 = ANSWER 초기화
    for (var i=0; i<id_list.length; i++){
        answer[i] = 0;
    }
    
    // ID별 신고한 목록 SET
    var rpt = [];
    id_list.forEach(function(id){
        rpt[id] = new Set(); 
    }); // Ex ) rpt["muzi"] = ["frodo", "neo"]
    
    // ID별 신고당한 횟수
    var rptd = [];
    id_list.forEach(function(id){
       rptd[id] = 0;  
    }); // Ex ) rptd["frodo"] = 2;
    
    report.forEach(function(r){
        var rpt_id = r.split(' ')[0];
        var rptd_id = r.split(' ')[1];
        
        // 기존 신고 목록에 없을 경우에만 (동일한 유저 신고횟수는 1회로 처리)
        if(!rpt[rpt_id].has(rptd_id)){
            // ID별 신고한 목록 SET 에 ADD
            rpt[rpt_id].add(rptd_id);
            
            // ID별 신고당한 횟수 증가
            rptd[rptd_id] ++;
        }
    });
    
    // 결과 출력 
    for (var i in id_list){
        id = id_list[i];
        // 각 ID별로 신고한 목록을 확인
        rpt[id].forEach(function(rptd_id){
            // 신고한 ID가 횟수 초과했는지 확인
            if(rptd[rptd_id] >= k){
                answer[i] ++;
            }
        });
    }
    
    return answer;
}