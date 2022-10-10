// https://school.programmers.co.kr/learn/courses/30/lessons/72411
function solution(orders, course) {
    var answer = [];
    
    course.forEach((n)=>{ 
        var num = n; // num개짜리 코스 구하기
        var max = 0;
        var time = {};
        var courses = [];
        
        orders.forEach((o)=>{
            var order = [...o];
            if(order.length >= num){
                var comb = getComb(order,num);
                courses.push(...comb);
            }
        });
        
        var courseSet = new Set(courses);
        courses = [...courseSet]; // courses는 주문된 메뉴에서 num개짜리 코스 조합 모두 구한 것
        
        // 가장 많이 주문된 것 찾기
        courses.forEach((c)=>{
            time[c] = 0;
            orders.forEach((o)=>{
                // o가 c를 가지는지 확인
                var has = true;
                for(var i=0; i<c.length; i++){
                    if(o.indexOf(c[i]) == -1)
                        has = false;
                }
                // 가진다면
                if(has) time[c] += 1;
            });
            
            if(time[c] > max) // 가장 주문된 횟수가 max인지 확인
                max = time[c];
        });
        
        for(var [key, value] of Object.entries(time)){
            if(max > 1 && value == max) // 주문횟수가 1이상이고 value가 max이면 answer에 넣기 
                answer.push(key);
        }
    });
    
    // 조합 구하기
    function getComb(arr, n){
        var results = [];
        if(n == 1) return arr.map((el) => [el]);
        arr.forEach((f, i, o)=>{
            var rest = o.slice(i + 1);
            var comb = getComb(rest, n-1);
            var attached = comb.map((el)=>[f, ...el]);
            results.push(...attached.map((l)=>l.sort().join('')));
        });
        
        return results;
    }
    
    return answer.sort();
}
