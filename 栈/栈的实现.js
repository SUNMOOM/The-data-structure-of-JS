/**
实现栈
push(element(s))：添加一个（或几个）新元素到栈顶。
pop()：移除栈顶的元素，同时返回被移除的元素。
peek()：返回栈顶的元素，不对栈做任何修改（这个方法不会移除栈顶的元素，仅仅返回它）
isEmpty()：如果栈里没有任何元素就返回true，否则返回false。
clear()：移除栈里的所有元素。
size()：返回栈里的元素个数。这个方法和数组的length属性很类似。
print(): 打印栈元素
 */
// ES6

module.exports  = (function () {
  class Stack {
    constructor() {
      this.items = []
    }
    // 取出一个数据
    pop() {
      return this.items.pop()
    }
    // 添加一个数据
    push(...arg) {
      return this.items.push(...arg)
    }
    // 取出栈顶数据
    peek() {
      return this.items[_items.length - 1]
    }
    // 判断为空
    isEmpty() {
      return this.items.length === 0
    }
    size() {
      return this.items.length
    }
    // 清空
    clear() {
      return this.items = []
    }
    print() {
      return this.items.toString()
    }
  }
  return Stack
})()