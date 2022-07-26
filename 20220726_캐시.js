// https://school.programmers.co.kr/learn/courses/30/lessons/17680
function solution(cacheSize, cities) {
    var answer = 0, cache = [];
    
    cities.forEach((c)=>{
        c = c.toLowerCase();
        var idx = cache.indexOf(c);
        // cache에 없을 경우
        if(idx == -1){
            // cache에 들어갈 자리가 없는 경우 LRU
            if(cache.length == cacheSize)
                cache = cache.slice(1); // 맨 앞에 것 빼기
            if(cacheSize != 0)
                cache.push(c); // 새로운 것 넣기
            answer += 5; // cache miss
        }
        // cache에 있을 경우
        else{
            cache = [...cache.slice(0, idx), ...cache.slice(idx+1), cache[idx]]; // 있는 것 맨 뒤로
            answer += 1; // cache hit
        }
    });
    
    return answer;
}
