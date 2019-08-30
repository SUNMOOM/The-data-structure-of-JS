/**
 * 十进制转二进制
 * 
 * 实现原理： 将该十进制数字先进行取余操作，将余数放入栈中，再和2相除，将结果进行下一次循环
 */
var Stack = require('./栈的实现')

function divideBy2(decNumber) {
  var remStack = new Stack(),
    rem,
    binaryString = '';
  while (decNumber > 0) { 
    rem = Math.floor(decNumber % 2); // 对2取余
    remStack.push(rem); // 余数放入栈中，越接近栈顶，值越高
    decNumber = Math.floor(decNumber / 2); // 对2整除
  }
  while (!remStack.isEmpty()) { // 循环出栈，直至空栈
    binaryString += remStack.pop().toString(); // 拼接成二进制数
  }
  return binaryString;
}

console.log(divideBy2(11));