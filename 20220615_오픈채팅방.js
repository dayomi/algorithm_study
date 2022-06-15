function solution(record) {
    var answer = [], nickname_match = [];
    var enter_log = '님이 들어왔습니다.', leave_log = '님이 나갔습니다.';
    
    // record 기록
    record.forEach(function(r){
        var rArr = r.split(' ');
        var action = rArr[0], user_id = rArr[1], user_nm = rArr[2];
        
        if(user_nm != null)
            nickname_match[user_id] = user_nm; // 닉네임 매치
        
        if(action != 'Change')
            answer.push(user_id + ' ' + action); // ex) 'uid1234 Enter'
    })
    
    // answer 문자열 생성
    answer = answer.map(function(a){
        var user_nm = nickname_match[a.split(' ')[0]];
        return user_nm + (a.split(' ')[1] == 'Enter' ? enter_log : leave_log);
    });
    
    return answer;
}