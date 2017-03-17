/*
	链式流
	链式是通过连接输出流到另外一个流并创建多个对个流操作链的机制。链式流一般用于管道操作。
*/ 
var fs = require('fs');
var zlib = require('zlib');

// 压缩input.txt 文件为 input.txt.gz
// fs.createReadStream('zlib.txt')
// 	.pipe(zlib.createGzip())
// 	.pipe(fs.createWriteStream('zlib.txt.gz'));
// console.log('文件压缩完成');

// 解压 input.txt.gz 文件为 input.txt
fs.createReadStream('zlib.txt.gz')
  .pipe(zlib.createGunzip())
  .pipe(fs.createWriteStream('zlib.txt'));
  
console.log("文件解压完成。");