// https://school.programmers.co.kr/learn/courses/30/lessons/17679#
// comment : 좀 헤맸는데 deep copy 문제였음 ㅠㅠ 2중배열은 deep copy 좀 더 신경쓸것..

function solution(m, n, board) {
    var answer = 0, nboard = [], tboard = [];
    
    nboard = deepCopy(board);
    tboard = deepCopy(board);

    while(1){
        deleteBlock();
        var cnt = checkDeleted();
        if(cnt == 0) break;
        answer += cnt;
        for(var i=m-1; i>=0; i--){
            for(var j=n-1; j>=0; j--){
                downBlock(i, j, tboard[i][j]);
            }
        }
        nboard = deepCopy(tboard);
    }
    
    return answer;
    
    function deleteBlock(){
        for(var i=0; i<m-1; i++){
            for(var j=0; j<n-1; j++){
                var c = nboard[i][j];
                if(c != ' ' && nboard[i+1][j] == c && nboard[i][j+1] == c && nboard[i+1][j+1] == c){
                    tboard[i][j] = '0'; tboard[i+1][j+1] = '0'; tboard[i+1][j] = '0'; tboard[i][j+1] = '0';
                }
            }
        }
    }
    
    function checkDeleted(){
        var cnt = 0;
        for(var i=0; i<m; i++){
            for(var j=0; j<n; j++){
                if(tboard[i][j] == '0'){
                    cnt++;
                    tboard[i][j] = ' ';
                }
            }
        }
        return cnt;
    }
    
    function downBlock(i, j, c){
        if(i == m-1 || tboard[i+1][j] != ' ')
            tboard[i][j] = c;
        else{
            tboard[i][j] = ' ';
            downBlock(i+1, j, c);
        }
    }
    
    function deepCopy(a){
        var newlist = [];
        a.forEach((l)=>{
            var ll = [...l];
            newlist.push(ll);
        });
        return newlist;
    }
}
