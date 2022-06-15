function solution(enroll, referral, seller, amount) {
    var answer = [];
    var organization = {}, profits = {};
    
    // 다단계 구조 초기화
    enroll.forEach((n, i)=>{
        organization[n] = referral[i];
        profits[n] = 0;
    });
    organization['-'] = 0; profits['-'] = 0;
    
    // 판매 내역 확인
    for(var i=0; i<seller.length; i++){
        var emp = seller[i]; // 판매자
        var income = amount[i] * 100; // 이득
        distribute(emp, income); // 이득 분배하기
    }
    
    Object.keys(profits).forEach((n)=>{
       if( n != '-' )
           answer.push(profits[n]);
    });
    
    // 수익 분배 하는 함수
    function distribute(emp, income){ 
        var sup, temp = emp, tincome = income, benefit;
        
        // root까지 왔거나 && 분배할 금액이 0이라면 종료 (★ 이걸로 시간초과 해결함)
        while(sup != '-' && tincome != 0){ 
            // 상사 확인
            sup = organization[temp];
            // 상사에게 분배
            benefit = parseInt(tincome * 0.1);
            if(sup == '-')
                profits[sup] += benefit;
            // 본인 이득 분배
            profits[temp] += tincome-benefit;
            // 이득 값 변경
            tincome = benefit;
            // 상사를 기준으로 변경
            temp = sup;
        }
    }
    
    return answer;
}