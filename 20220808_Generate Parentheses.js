// Generate Parentheses
// https://leetcode.com/problems/generate-parentheses/
var generateParenthesis = function(n) {
    var combs = [], parenthese = '('.repeat(n).split(''), making = [];
    
    var makeParenthesis = function(making, parenthese, str){
        if(str.length == n*2){
            combs.push(str);
            return str;
        }
        
        // parenthese가 있으면 넣거나
        if(parenthese.length != 0){
            var nparenthese = parenthese.slice();
            var nmaking = making.slice();
            nmaking.push(nparenthese.pop());
            var nstr = str + "(";
            makeParenthesis(nmaking, nparenthese, nstr);
        }
        
        // 빼거나
        if(making.length != 0){
            var nparenthese = parenthese.slice();
            var nmaking = making.slice();
            nmaking.pop();
            var nstr = str + ")";
            makeParenthesis(nmaking, nparenthese, nstr);
        }
    }
    
    makeParenthesis(making, parenthese, "");
    return combs;
};
