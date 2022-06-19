function solution(n) {
    var answer = '', number = ['4', '1', '2'];
    
    while(n>0){
        var r = n % 3;
        answer = number[r] + answer;
        if(r == 0){
            n = Math.floor((n-1)/3);
        }else{
            n = Math.floor(n/3);
        }
    }
    
    return answer;
}

// 첨에 조합으로 풀다가 테스트 13까지 통과되고 나머지 런타임에러남..
// 질문하기 풀이보고 만든건데 다시 뜯어봐야함 ㅠㅠ
