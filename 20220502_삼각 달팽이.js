function solution(n) {
    var answer = [], check = [];
    var max = 0;
    for(var i=0; i<n; i++){
        var li = [];
        for(var j=0; j<=i; j++){
            li.push(0);
        }
        check.push(li); // check 배열 초기화
        max += (i+1); // max 숫자 구하기
    }
    
    var direction = 0; // 0 : 왼쪽아래로 , 1 : 오른쪽으로 , 2 : 왼쪽위로
    var i=0, j=0; // 좌표 i, j
    for(var num=1; num<=max; num++){
        check[i][j] = num; // 채우기
        
        // == 다음방향 정하기 ==
        
        // 왼쪽 아래로 가고 있었다면
        if(direction == 0){
            // 왼쪽 아래로 갈 수 있고 check == 0 이면 가기
            if(i + 1 < n && check[i+1][j] == 0){
                i++;
            }
            // 못가게 되면 오른쪽으로 방향전환
            else{
                j++;
                direction = 1;
            }
        }
        
        // 오른쪽으로 가고 있었다면
        else if(direction == 1){
            // 오른쪽으로 갈 수 있고 check == 0 이면 가기
            if(j + 1 < n && check[i][j+1] == 0){
                j++;
            }
            // 못가게 되면 왼쪽 위로 방향전환
            else{
                i--;
                j--;
                direction = 2;
            }
        }
        
        // 왼쪽 위로 가고 있었다면
        else{
            // 왼쪽위로 갈 수 있고 check == 0이면 가기
            if(i - 1 >= 0 && j - 1 >=0 && check[i-1][j-1] == 0){
                i--;
                j--;
            }
            // 못가게 되면 왼쪽 아래로 방향전환
            else{
                i++;
                direction = 0;
            }
        }
    }
    
    // check에 넣은 순서를 answer로 변환
    check.forEach((num)=>{
        answer.push(...num);
    });
    
    return answer;
}