function PriorityQueue() {
  let items = []; // 使用数组队列

  function QueueElement(element, priority) { // 通过构造函数，创造具有优先级的元素对象
    this.element = element;
    this.priority = priority;
  }

  // 根据优先级进行入队操作
  this.enqueue = function (element, priority) {
    // 在入队时，new 一个元素对象
    let queueElement = new QueueElement(element, priority);
    // 设置一个标识，判断是否可以插队
    let added = false;
    // 遍历查找队列中是否有比自己优先级低的元素
    for (let i = 0; i < items.length; i++) {
      if (queueElement.priority < items[i].priority) { // {2}
      // 然后进行插队
        items.splice(i, 0, queueElement); // {3}
        added = true;
        break; // {4}
      }
    }
    // 否则就不能插队，从队尾入队
    if (!added) {
      items.push(queueElement); //{5}
    }
  };

  this.print = function () {
    for (let i = 0; i < items.length; i++) {
      console.log(`${items[i].element} - ${items[i].priority}`);
    }
  };
  //其他方法和默认的Queue实现相同
}