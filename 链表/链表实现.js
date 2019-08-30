function LinkedList() {
  let Node = function (element) { // 需要一个Node辅助构造函数
    this.element = element;
    this.next = null;
  };
  let length = 0; // 链表长度
  let head = null; // 设置一个头节点
  this.append = append
  this.insert = function (position, element) {};
  this.removeAt = removeAt
  this.remove = function (element) {};
  this.indexOf = function (element) {};
  this.isEmpty = function () {};
  this.size = function () {};
  this.getHead = function () {};
  this.toString = function () {};
  this.print = function () {};
}

function append (element) {
  let node = new Node(element), //{1}
    current; // 设置一个变量指向当前节点
  if (head === null) { //列表中第一个节点 //{3}
    head = node;
  } else {
    current = head; //{4}
    //循环列表，直到找到最后一项
    while (current.next) {
      current = current.next;
    }
    //找到最后一项，将其next赋为node，建立链接
    current.next = node; //{5}
  }
  length++; //更新列表的长度 //{6} 
};

function removeAt (position) {
  //检查越界值
  if (position > -1 && position < length) { // {1}
    let current = head, // {2}
      previous, // {3}
      index = 0; // {4}
    //移除第一项
    if (position === 0) { // {5}
      head = current.next;
    } else {
      while (index++ < position) { // {6}
        previous = current; // {7}
        current = current.next; // {8}
      }
      //将previous与current的下一项链接起来：跳过current，从而移除它
      previous.next = current.next; // {9}
    }
    length--; // {10}
    return current.element;
  } else {
    return null; // {11}
  }
};