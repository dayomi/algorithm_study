// Remove Nth Node From End of List
// https://leetcode.com/problems/remove-nth-node-from-end-of-list/
var removeNthFromEnd = function(head, n) {
    var length = 0, i=0;
    var node = head;
    
    while(node != null){ // 전체 linkedList 길이 구하기
        node = node.next;
        length++;
    }
    
    if(length == 1) // 길이가 1인 linkedList이면 null
        return null;
    
    node = head;
    while(i <= (length - n)){
        if(length - n == 0){ // 맨 처음 node 를 빼야하면 next로 바꾸기
            head = head.next;
            break;
        }
        if(i++ == (length - n)-1){  // 빼야할 node의 전에 도달 
            node.next = node.next.next;
            break;
        }
        node = node.next;
    }
    
    return head;
};
