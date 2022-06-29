function solution(fees, records) {
    var answer = [];
    
    var car = {}, parking = {}, Log = function(intime){ this.intime = intime },
        base_time = fees[0], base_fee = fees[1],
        unit_time = fees[2], unit_fee = fees[3];
    
    records.forEach((r)=>{
        var record = r.split(' ');
        if(record[2] == 'IN'){
            // 첫 입차이면 0으로 초기화
            if(car[record[1]] == null)
                car[record[1]] = 0;
            // 입차시간 기록
            parking[record[1]] = new Log(record[0]);
        }else{
            // 누적시간 기록
            car[record[1]] +=(Number(record[0].split(':')[0])*60 + Number(record[0].split(':')[1]))
                - (Number(parking[record[1]].intime.split(':')[0])*60 + Number(parking[record[1]].intime.split(':')[1]));
            delete parking[record[1]];
        }
    });
    
    // 출차 하지 않아서 23:59분으로 계산할 것 계산
    Object.keys(parking).forEach((c)=>{
        var intime = parking[c].intime;
        car[c] += (23*60 + 59) - (Number(intime.split(':')[0]*60) + Number(intime.split(':')[1]))
        delete parking[c];
    })
    
    // 비용 계산 후 answer에 입력
    var carList = Object.keys(car).sort();
    carList.forEach((c)=>{
        var using_time = car[c];
        var totalfee =  using_time <= base_time ? base_fee : 
                        base_fee + Math.ceil((using_time - base_time) / unit_time) * unit_fee;
        answer.push(totalfee);
    });
    
    return answer;
}
