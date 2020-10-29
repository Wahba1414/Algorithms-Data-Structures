function removeDuplicates(head) {
  if (!head) {
      return head;
  }

  var currentNode = head;

  while(currentNode){
    if(currentNode.next && currentNode.data == currentNode.next.data){
      currentNode.next = currentNode.next.next;
    }else{
      currentNode = currentNode.next;
    }
  }

  return head;
}