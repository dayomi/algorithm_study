function solution(numbers) {
    var answer = 0;
    
    var number = [...numbers];
    var len = number.length;
    
    var result = [];
    for(var i=1; i<=len; i++){
        var r = getPerm(number, i); // 순열 구하는 함수 (재귀)
        result.push(...r);
    }
    
    // [ [1], [7], [1,7], [7,1] ] 형태의 배열을
    // [ 1, 7, 17, 71]로 만드는 과정
    [...new Set(result.map(v => Number(v.join(""))))].forEach((n)=>{
        if(isPrime(n)) answer++; // 소수이면 answer 증가
    });
    
    return answer;
    
    // 순열 구하는 함수 ★★★★★★★★★★★★★★★★
    function getPerm(number, len){
        var result = [];
        
        if(len == 1)
            return number.map(v=>[v]);
            // 더 구해야하는 number가 1개라면 [v]형태로 리턴
        
        number.forEach((n, i, o)=>{
            // 순열 구하기 (고른 것 빼고 나머지로 rest 배열 만듬)
            var rest = [...o.slice(0, i), ...o.slice(i + 1)];
            var perms = getPerm(rest, len - 1); // [ [1] ] 
            var attached = perms.map(v => [n, ...v]); // [ [1,2,3] ] 형태
            result.push(...attached);
            // [ [ 1, 2, 3] ] 형태로 result에 push

            // * 참고
            // 조합 구하기 (고른 것 빼고 뒤의 것을 구한다 = 중복 불허)
            // var rest = [...o.slice(i + 1)];
        });
        
        return result;
    }
}


// 소수판별함수
function isPrime(n){
    if(n == 0 || n == 1)
        return false;
    
    for(var i=2; i<n; i++){
        if(n%i == 0)
            return false;
    }
    return true;
}