// https://leetcode.com/problems/3sum/ 

var threeSum = function(nums) {
    var nega = [], posi = [], zero = [];
    var result = [], tempa, tempb;
    
    // 음수, 양수, 0으로 분류
    nums.forEach((n)=>{
        if(n < 0) nega.push(n);
        else if(n == 0) zero.push(n);
        else posi.push(n);
    });
    
    posi = posi.sort(function(a, b){return a-b}); // 양수는 오름차순 정렬
    nega = nega.sort(function(a, b){return b-a}); // 음수는 내림차순 정렬
    
    // 1) 음수 2 + 양수 1 = 0
    for(var i=0; i<nega.length; i++){
        for(var j=i+1; j<nega.length; j++){
            //console.log(nega[i], nega[j]);
            var negasum = nega[i] + nega[j]; // nega 의 2개 값 더하기
            var pIdx = posi.indexOf(negasum * (-1)); // negasum * (-1) 이 posi에 있는지 확인
            //console.log(posi[pIdx]);
            
            if(pIdx != -1)// negasum + posi값 = 0 인 경우
                result.push([nega[i], nega[j], posi[pIdx]]);
            
            if( (negasum * (-1)) > posi[posi.length-1] ) // negasum이 posi의 last item보다 크면 종료
                break;
        }
    }
    
    // 2) 음수 1 + 양수 2 = 0 (음수2 + 양수1 과 마찬가지로 진행)
    for(var i=0; i<posi.length; i++){
        for(var j=i+1; j<posi.length; j++){
            var posisum = posi[i] + posi[j];
            //console.log(posi[i], posi[j]);
            var nIdx = nega.indexOf(posisum * (-1));
            //console.log(nega[nIdx]);
            
            if(nIdx != -1)
                result.push([posi[i], posi[j], nega[nIdx]]);
            
            if( (posisum * (-1)) < nega[nega.length -1] )
                break;
        }
    }
    
    // 3) 음수 1 + 양수 1 + 0 = 0
    if(zero.length > 0){
        for(var i=0; i<nega.length; i++){
            var pIdx = posi.indexOf(nega[i] * (-1));

            if(pIdx != -1)
                result.push([nega[i], posi[pIdx], 0]);
        }
    }
    
    // 4) 0 + 0 + 0 = 0
    if(zero.length >= 3)
        result.push([0, 0, 0])
    
    // 중복제거하여 return
    return result.length == 0 ? [] : 
    [...new Set(result.join("|").split("|"))]
    .map((v) => v.split(","))
    .map((v) => v.map((a) => +a));
};
