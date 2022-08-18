// Find First and Last Position of Element in Sorted Array
// https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/

var searchRange = function(nums, target) {
    var low = -1, high = -1;
    
    binarySearch(0, nums.length-1, target);
    
    function binarySearch(start, end, target){
        var mid = Number.parseInt((start + end) / 2);
        
        if(start > end)
            return -1;
        
        if(nums[mid] == target){
            if(low == -1 || (low != -1 && low > mid)) low = mid;
            if(high == -1|| (high != -1 && high < mid)) high = mid;
            binarySearch(start, mid-1, target);
            binarySearch(mid+1, end, target);
        }
        else if(nums[mid] > target)
            binarySearch(start, mid-1, target);
        else
            binarySearch(mid+1, end, target);
    }
    
    return [low, high];
};
