/* 기존 풀이 */
function solution(w, h) {
    var answer = w*h, r = h/w, cut = 0; // 기울기를 먼저 계산하니 6번이 계속 틀림...ㅡㅡ

    for(var i=0; i<w; i++){ // 선이 지나가는 길을 따라서 잘린 사각형을 구함
        cut += (Math.ceil((i+1) * r) - Math.floor(i * r))
    }
    return answer - cut;
}

/* 정답 풀이 */
function solution(w, h) {
    var answer = w*h, cut = 0;
    for(var i=0; i<w; i++){
        cut += (Math.ceil((h*(i+1))/w) - Math.floor((h*i)/w))
        // 위에서 곱했던 기울기 r (=h/w)를 그냥 풀어서 계산하니까 통과... (이해불가)
    }
    return answer - cut;
}