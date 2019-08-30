function singleLinkList() {
  // 创建一个节点类型
  function Node(data, next) {
    // 节点的数据块
    this.data = data ? data : null
    // 节点的next指针
    this.next = next ? next : null
  }
  // 创建一个头部节点实例
  var head = new Node()
  // 头部放置一个指针
  var currentNode = head
  // 链表的长度
  var length = 0
  // 尾部添加节点
  this.append = function (data) {
    // 1.包装一个节点
    var node = new Node(data)
    if (length) {
      // 若为空链表，则直接赋值
      head.next = node
    } else {
      while (currentNode.next) {
        // 遍历到最后一个节点
        currentNode = currentNode.next
      }
      // 把当前节点的 next 指针 指向 新的节点
      currentNode.next = node
    }
    return length++
  }
  // 向指定位置插入新节点
  this.insert = function (position, data) {
    // 判断插入位置是否越界
    if (position < 1 || position > length){
      
    }
  }
}