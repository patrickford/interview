class LinkedList {
  constructor() {
    this.head = null
  }

  add(value) {
    const newNode = {
      value,
      next: null
    };

    if (this.head === null) {
      this.head = newNode;
    } else {
      let currentNode = this.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
    }
  }

  length() {
    let count = 0;
    if (this.head === null) {
      return count;
    } else {
      let currentNode = this.head;
      count++
      while (currentNode.next) {
        currentNode = currentNode.next
        count++;
      }
      return count;
    }
  }


}
