var events = require('events');
var emitter = new events.EventEmitter();

// 监听器 #1
var listener_01 = function listener_one(){
	console.log('监听器 listener_01 执行');
}
// 监听器 #2
var listener_02 = function listener_two(){
	console.log('监听器 listener_02 执行');
}


// 绑定事件
emitter.addListener('connection',listener_01);
emitter.addListener('connection',listener_02);


var listeners = require('events').EventEmitter.listenerCount(emitter,'connection');
console.log(listeners + " 个监听器监听连接事件");

// 处理 connection事件
emitter.emit('connection');
// 移除监绑事件 listener_01 函数
emitter.removeListener('connection',listener_01);
console.log('listener_01 不再接受监听');
// 触发事件
emitter.emit('connection');
var listeners = require('events').EventEmitter.listenerCount(emitter,'connection');
console.log(listeners + " 个监听器监听连接事件");
console.log('程序执行完毕');




