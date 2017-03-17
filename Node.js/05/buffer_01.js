/*
	Node.js Buffer(缓冲区)
	JavaScript 语言自身只有字符串数据类型，没有二进制数据类型。
	但在处理像TCP流或文件流时，必须使用到二进制数据。因此在 Node.js中，定义了一个 Buffer 类，该类用来创建一个专门存放二进制数据的缓存区。
	在 Node.js 中，Buffer 类是随 Node 内核一起发布的核心库。Buffer 库为 Node.js 带来了一种存储原始数据的方法，
	可以让 Node.js 处理二进制数据，每当需要在 Node.js 中处理I/O操作中移动的数据时，就有可能使用 Buffer 库。
	原始数据存储在 Buffer 类的实例中。一个 Buffer 类似于一个整数数组，但它对应于 V8 堆内存之外的一块原始内存。
*/ 
// 创建长度为 10 字节的 Buffer 实例
var buf_01 = new Buffer(10);


// 通过给定的数组创建Buffer
var buf_02 = new Buffer([10.20,30,40,50]]);


// 通过一个字符串俩创建Buffer实例 uft-8是默认的编码方式，此外它同样支持以下编码："ascii" "utf-8" "utf16le" "ucs2" "base64" "hex"
var buf_03 = new Buffer("www.baidu.com","utf-8")