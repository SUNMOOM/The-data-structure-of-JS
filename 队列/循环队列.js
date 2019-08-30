// 击鼓传花
var Queue = require('./实现对列')

// num 为
function hotPotato(nameList, num) {
  let queue = new Queue(); 
  // 循环添加游戏者名字
  for (let i = 0; i < nameList.length; i++) {
    queue.enqueue(nameList[i]); 
  }
  let eliminated = '';
  // 循环出队
  while (queue.size() > 1) {
    for (let i = 0; i < num; i++) {
      queue.enqueue(queue.dequeue()); // {3}
    }
    // 出队者
    eliminated = queue.dequeue(); // {4}
    console.log(eliminated + '在击鼓传花游戏中被淘汰。');
  }
  // 最后一位为获胜者
  return queue.dequeue(); // {5}
}