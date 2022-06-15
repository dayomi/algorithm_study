function solution(numbers, target) {
    var answer = 0;
    let depth = numbers.length;
    
    dfs(numbers, 0, 0);
    
    function dfs(numbers, result, d){
        if(d === depth){ // depth에 다다르면 중단
            if(result == target) // target과 같으면 answer더하기
                answer++; 
            return;
        }
        dfs(numbers, result+numbers[d], d+1); // 더하는 경우 
        dfs(numbers, result-numbers[d], d+1); // 빼는 경우
    }
    
    return answer;
}