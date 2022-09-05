// https://school.programmers.co.kr/learn/courses/30/lessons/81302
function solution(places) {
    var answer = [];
    
    places.forEach((place)=>{
        // place 별로 시작
        var map = place.slice();
        var people = [], result = 1;
        
        // 사람 list 생성
        for(var i=0; i<map.length; i++){
            for(var j=0; j<map[i].length; j++){
                if(map[i][j] == 'P')
                    people.push([i, j]);
            }
        }
        
        // 사람에서 사람으로 가는 경로 탐색
        for(var i=0; i<people.length; i++){
            var sx = people[i][0], sy = people[i][1]; // 출발 사람
            for(var j=i+1; j<people.length; j++){
                var ex = people[j][0], ey = people[j][1]; // 도착 사람
                var manhattan = Math.abs(sx - ex) + Math.abs(sy - ey);
                
                if( (manhattan == 1) ||                                    // 1) 바로 옆에 있음
                    (manhattan == 2 &&                                     // 2) 한칸 옆에 있음
                    ((sx == ex && map[sx][Math.min(sy, ey) + 1] == 'O') || // 2-1) 가로 일직선 + 둘 사이가 빈 테이블
                     (sy == ey && map[Math.min(sx, ex) + 1][sy] == 'O') || // 2-2) 세로 일직선 + 둘 사이가 빈 테이블
                     (map[sx][ey] == 'O' || map[ex][sy] == 'O')))){        // 2-3) 대각선 + 둘 빈테이블 존재
                            result = 0;
                }
            }
        }
        answer.push(result);
    });
    
    return answer;
}
