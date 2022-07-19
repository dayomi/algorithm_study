// https://leetcode.com/problems/container-with-most-water/

var maxArea = function(height) {
    var max = -1
    
    for(var i=Math.max(...height); i>=0; i--){
        var h = i, a = -1, b = -1;
        if(h * height.length < max) // 해당 높이에서 가장 길어도 max 보다 작으면 break
            break;
        
        for(var j=0; j<height.length; j++){ // 가장 높은 곳에서 아래로 직선 긋기
            if(height[j] >= h){ 
                if(a == -1) a = j;  // 왼쪽   endpoints 구하기 (1)
                else b = j;         // 오른쪽 endpoints 구하기 (2)
            }
        }
        max = h * (b - a) > max ? h * (b-a) : max;
    }
    
    return max;
};
