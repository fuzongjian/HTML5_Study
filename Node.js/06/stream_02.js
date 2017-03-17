/*
	写入流
*/ 
var fs = require('fs');
var data = '人生自古谁无死，留取丹青照汗青。'
// 创建一个可以写入的流，写入到文件 output.txt 中
var writerStream = fs.createWriteStream('output.txt');
// 使用utf8编码写入数据
writerStream.write(data,'UTF8');
// 标记文件末尾
writerStream.end();
// 处理流事件 ---> data end and error
writerStream.on('finish',function(){
	
	console.log('写入完成');
});
writerStream.on('error',function(err){
	console.log(err.stack);
});
console.log('程序执行完毕')
