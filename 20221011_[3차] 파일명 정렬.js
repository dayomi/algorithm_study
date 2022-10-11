// https://school.programmers.co.kr/learn/courses/30/lessons/17686
function solution(files) {
    var answer = [];
    
    var File = function(origin,head,number){
        this.origin = origin;
        this.head = head;
        this.number = number;
    }
    
    var fileList = [];
    
    files.forEach((f)=>{ // head number 분리
        // f = "img12.png"
        var head = "", number = "";
        var flag = 0; // 0:head, 1:number
        for(var i=0; i<f.length; i++){
            var isNumber = (f.charCodeAt(i) >= 48 && f.charCodeAt(i) <= 57);
            if(flag == 0 && isNumber){ // head중인데 number
                flag = 1;
                number += f[i];
            }else if(flag == 0 && !isNumber){// head 중이고 number x
                head += f[i];
            }else if(flag == 1 && isNumber){// number중인데 number
                number += f[i];
            }else if(flag == 1 && !isNumber){// number중인데 number x
                break;
            } 
        }

        var file = new File(f, head.toUpperCase(), Number(number));
        fileList.push(file);
    });
    
    // 정렬 : head 먼저, 같은 경우 number 비교
    fileList.sort(function(a, b){
        if(a.head > b.head)
            return 1;
        if(a.head < b.head)
            return -1
        if(a.head == b.head){
            if(a.number > b.number)
                return 1;
            if(a.number < b.number)
                return -1;
            if(a.number == b.number)
                return 0;
        }
    });
    
    fileList.forEach((file)=>{
        answer.push(file.origin); 
    });
    
    return answer;
}
