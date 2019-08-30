var Stack = require('./栈的实现')

function divideBy16(num) {
  var result = ''
  var stack = new Stack()
  var chars = ['A', 'B', 'C', 'D', 'E', 'F']
  // 继续向栈中添加余数循环操作
  while (num > 0) {
    // 对数据进行求余
    var i = num % 16
    var rem = i <= 9 ? i : chars[i - 10]
    // 将余数添加进栈中
    stack.push(rem)
    // 取余后再进行整除
    num = Math.floor(num / 16)
  }
  // 依次提取栈
  while (!stack.isEmpty()) {
    // result = result + stack.pop().toString()
    result += stack.pop().toString()
  }
  return result
}

console.log(divideBy16(47));