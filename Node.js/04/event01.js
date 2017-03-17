var events =  require('events');
var emitter = new events.EventEmitter();
emitter.on('some_event',function(){
	console.log('some_event 触发事件');
});
setInterval(function(){
	emitter.emit('some_event');
},1000);