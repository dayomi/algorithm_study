function solution(rows, columns, queries) {
    var answer = [];
    var graph = [];
    
    var t = 1;
    // 이차원 배열 만들기
    // Ex) [ [1,2,3,4,5,6]
    //   ...,[31,32,33,34,35,36] ]
    for(var i=0; i<rows; i++){
        var r = [];
        for (var j=0; j<columns; j++){
            r.push(t++);
        }
        graph.push(r);
    }
    
    // queries 에서 꺼내서 하나씩 rotation 한다
    queries.forEach((q)=>{
       rotation(graph, q); 
    });
    
    // rotation 함수
    function rotation(graph, query){
        var min = rows*columns; // 최소값 구하기 위한 값
        
        // rotation 시작점, 끝점의 X Y 좌표 구하기
        var startX = query[0] -1, startY = query[1] -1, 
            endX = query[2] -1, endY = query[3] -1;
        
        // 시작점에서 rotation 시작
        var x = startX, y = startY;
        var d = 1, tmp = graph[x][y], v = 0;
        // d : 현재 방향 
        // tmp : rotation 을 위한 값 저장 (시작점 값을 갖고 시작)
        // v : 값을 넣기 위한 변수
        
        while(1){
            if(tmp < min) // 현재값이 min인지 확인
                min = tmp;
            
            if(d == 1){
                v = tmp; // tmp의 값 v에 넣기
                y++; // y 값 증가
                tmp = graph[x][y]; // tmp에 다음값 미리 빼놓기
                graph[x][y] = v;
            }
            else if (d == 2){
                v = tmp;
                x++; // x 값 증가
                tmp = graph[x][y];
                graph[x][y] = v;
            }
            else if (d == 3){
                v = tmp;
                y--; // y 값 감소
                tmp = graph[x][y];
                graph[x][y] = v;
            }
            else{
                v = tmp;
                x--; // x 값 감소
                tmp = graph[x][y];
                graph[x][y] = v;
            }
            
            // 방향 전환 혹은 종료 조건)
            if(d == 1 && y == endY)
                d = 2;
            else if(d == 2 && x == endX)
                d = 3;
            else if(d == 3 && y == startY)
                d = 4;
            else if(d == 4 && x == startX){ // startX, startY로 돌아오면 종료
                // 돌아간 것 중 최소값 answer에 넣기
                answer.push(min); 
                break;
            }
        }
    }
    
    return answer;
}