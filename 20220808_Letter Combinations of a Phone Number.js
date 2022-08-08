// Letter Combinations of a Phone Number
// https://leetcode.com/problems/letter-combinations-of-a-phone-number/
var letterCombinations = function(digits) {
    var keypad = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];
    var result = [];
    
    for(var i=0; i<digits.length; i++){
        var chars = keypad[digits[i]];
        
        if(result.length == 0){ // 처음이라면 key 세개 넣기
            for(var j=0; j<chars.length; j++){
                result.push(chars[j]);
            }
        }else{ // 처음이 아니라면 result에서 꺼내서 하나씩 넣기
            var newResult = [];
            while(result.length != 0){
                var s = result.shift();
                //console.log(s);
                for(var j=0; j<chars.length; j++){
                    newResult.push(s + chars[j]);
                }
            }
            result = newResult;
        }
    }
    
    return result;
};
