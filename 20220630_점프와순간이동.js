// https://programmers.co.kr/learn/courses/30/lessons/12980
function solution(n)
{
    var ans = 0;
    
    calculate(n);
    
    function calculate(num){
        if(num == 0)
            return;
        else if (num % 2 == 0)
            calculate(num / 2);
        else{
            ans ++;
            calculate(num - 1);
        }
    }

    return ans;
}
