/**
push(element)：添加一个（或几个）新元素到栈顶。
pop()：移除栈顶的元素，同时返回被移除的元素。
peek()：返回栈顶的元素，不对栈做任何修改。
isEmpty()：如果栈里没有任何元素就返回 true，否则返回 false。
clear()：移除栈里的所有元素。
size()：返回栈里的元素个数。
 */

function Stack() {
  // 1. 使用数组容器
  this.items = []
  // 2. 栈的方法
  // push(element)：添加一个（或几个）新元素到栈顶。
  this.push = function () {
    // 依次在栈顶中添加项
    Array.from(arguments).forEach(item=>{
      this.items.push(item)
    })
    // 返回添加后的长度
    return this.items.length
  }
  // 栈顶移出
  this.pop = function () {
    return this.items.pop()
  }
  // peek()：返回栈顶的元素，不对栈做任何修改。
  this.peek = function () {
    return this.items[this.items.length -1]
  }
  // isEmpty()：如果栈里没有任何元素就返回 true，否则返回 false。
  this.isEmpty = function () {
    return this.items.length === 0
  }
  // size()：返回栈里的元素个数。
  this.size = function () {
    return this.items.length
  }
  // print
  this.print = function () {
    return console.log(this.items.toString())
  }
  // clear()：移除栈里的所有元素。
  this.clear = function () {
    this.items = []
  }
}

// 测试
var stack = new Stack();
console.log(stack.isEmpty()); // true
stack.push(5); // 1
stack.push(8); // 2
console.log(stack.peek()); // 8
stack.push(11); // 3
console.log(stack.size()); // 3
console.log(stack.isEmpty()); // false
stack.push(15); // 4
stack.pop(); // 15
console.log(stack.size()); // 3
stack.print(); // 5,8,11
stack.clear(); // undefined
console.log(stack.size()); // 0