function mergeLists(head1, head2) {
  let dummyHead = new SinglyLinkedListNode(0);
  let currentNode = dummyHead; 

  while(head1 !== null && head2 !== null){

      if(head1.data < head2.data){
          currentNode.next = head1;
          head1 = head1.next
      } else {
          currentNode.next = head2
          head2 = head2.next
      }

      currentNode = currentNode.next
  }

  if(head1 !== null) {
      currentNode.next = head1;
  } else if (head2 !== null) {
      currentNode.next = head2
  }

  return dummyHead.next

}