function solution(numbers) {
    // 6 + 10 = 610 / 10 + 6 = 106 으로 계산하여 더 큰 수가 되는 순서대로 정렬
    var answer = [...numbers.map((v)=>v.toString())].sort(function(a, b){
        return (b + a) - (a + b); }).join(''); // join 함수를 통해 문자열로 만들기
    return answer[0] != '0' ? answer : '0'; // "0...0"일 경우엔 0을 리턴
}