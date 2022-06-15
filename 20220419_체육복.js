function solution(n, lost, reserve) {
    var answer = 0;
    
    // 학생이 가진 체육복 리스트
    var student = [];
    
    // 학생이 가진 체육복 갯수 초기화
    for (var i=0; i<n; i++){
        student[i] = 1;
    }
    
    // 잃어버린 아이는 0으로 초기화
    lost.forEach(function(i){
        student[i-1] = 0;
    });
    
    // 여분을 가진 아이는 2로 초기화
    reserve.forEach(function(i){
        if(student[i-1] == 0){ // 여분을 가졌는데 잃어버렸으면 1개 가짐
            student[i-1] = 1;
        }else{ // 잃어버리지 않았으면 2개 가짐
            student[i-1] = 2;
        }
    });
    
    console.log(student)
    
    // 맨 앞 학생부터 차례대로 체육복 나누기
    for (var i=0; i<n; i++){
        // 여분을 가진 아이인지
        if(student[i] == 2){
            // 앞에 학생이 있고 앞 학생이 0이라면 앞 학생에게 나누기
            if(i >= 1 && student[i-1] == 0){
                student[i-1] = 1;
                student[i] = 1;
            }
            // 뒤에 학생이 있고 뒷 학생이 0이라면 뒷 학생에게 나누기
            else if(i+1 < n && student[i+1] == 0){
                student[i+1] = 1;
                student[i] = 1;
            }
        }
    }
    
    student.forEach(function(s){
       if(s != 0) // 체육복 갖고 있으면 체육수업 참여
           answer++;
    });
    
    return answer;
}