var addTwoNumbers = function(l1, l2) {
    var l1_obj = l1, l2_obj = l2;
    var l3 = new Array(101); l3.fill(0);
    var hasNext = false, idx=0;
    
    while(l1_obj != null || l2_obj != null){
        subSum = l3[idx];

        if(l1_obj != null){
            subSum += l1_obj.val;
            l1_obj = l1_obj.next;
        }
            
        if(l2_obj != null){
            subSum += l2_obj.val;
            l2_obj = l2_obj.next;
        }

        // 자릿수 나누기
        if(subSum >= 10){
            l3[idx] = subSum - 10;
            l3[idx+1] = 1;
            hasNext = true;
        }else{
            l3[idx] = subSum;
            hasNext = false;
        }
        
        idx++;
    }
    
    if(hasNext) idx++;
    l3 = l3.slice(0, idx);
    
    // linked list로 생성
    var answer = null, anode = null;
    for(var i=l3.length - 1; i >= 0; i --){
        answer = {val : l3[i], next : anode};
        anode = answer;
    }
    
    return answer;
};
