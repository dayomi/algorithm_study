// https://school.programmers.co.kr/learn/courses/30/lessons/17683
function solution(m, musicinfos) {
    var answer = '(None)', matchPt = 0;
    
    musicinfos.forEach((infoStr)=>{
        var info = infoStr.split(',');
        var title = info[2], score = info[3];
        
        var startHour = Number(info[0].split(':')[0]), endHour = Number(info[1].split(':')[0]),
            startMin = Number(info[0].split(':')[1]), endMin = Number(info[1].split(':')[1])
        // 이부분 추가해서 통과함.. 문제 완전 더러움..
        endHour = endHour == 0 && endHour != startHour? 24 : endHour;
        
        var playTime = (endHour - startHour) * 60 + (endMin - startMin); // 음악재생시간 계산
        var scorel = makeList(score); // 악보 배열
        var ml = makeList(m);         // 멜로디 배열
        
        var play = [];
        for(var i=0; i < playTime; i++)
            play.push(scorel[(i % scorel.length)]); // 재생시간만큼 악보재생한 총멜로디 배열
        
        if(isIncludes(ml, play) && matchPt < playTime){ // 멜로디가 악보와 매칭 + 재생시간 가장 길면
            answer = title; // 곡 찾음
            matchPt = playTime;
        }
    });
    
    return answer;
    
    function makeList(str){ // '#'음을 붙여서 음 배열 만드는 함수
        var list = [];
        for(var i=0; i<str.length; i++){
            if(str[i] == '#')
                list[list.length-1] += '#';
            else
                list.push(str[i]);
        }
        return list;
    }
    
    function isIncludes(a, b){ // a 배열이 b 배열에 속하는지 여부 리턴하는 함수
        for(var i=0; i<b.length; i++){
            if(b[i] == a[0] && i + a.length - 1 < b.length){ // 일치 가능성 有
                for(var j=0; j<a.length; j++){
                    if(b[i+j] == a[j]){
                        if(j == a.length - 1) return true; // 모두 일치 할 경우 true 리턴
                        continue;
                    }
                    else break;
                }
            }
        }
        return false;
    }
}
