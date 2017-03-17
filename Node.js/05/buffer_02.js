/*
	写入缓冲区

	buf.write(string[, offset[, length]][, encoding])
	string - 写入缓冲区的字符串。
	offset - 缓冲区开始写入的索引值，默认为 0 。
	length - 写入的字节数，默认为 buffer.length
	encoding - 使用的编码。默认为 'utf8' 。

	返回值
	返回实际写入的大小。如果 buffer 空间不足， 则只会写入部分字符串。
*/ 

var buf = new Buffer(256);
var len = buf.write('www.baidu.com');
console.log('写入字节数： ' + len + '\n');


/*
	从缓冲区读取数据

	buf.toString([encoding[, start[, end]]])
	encoding - 使用的编码。默认为 'utf8' 。
	start - 指定开始读取的索引位置，默认为 0。
	end - 结束位置，默认为缓冲区的末尾。

	返回值
	解码缓冲区数据并使用指定的编码返回字符串。
*/ 

var buf_02 = new Buffer(26);
for(var i = 0 ;i < 26; i ++){
	buf[i] = i + 97;
}
console.log(buf.toString('ascii'));			//输出: abcdefghijklmnopqrstuvwxyz
console.log( buf.toString('ascii',0,5));   // 输出: abcde
console.log( buf.toString('utf8',0,5));    // 输出: abcde
console.log( buf.toString(undefined,0,5)); // 使用 'utf8' 编码, 并输出: abcde

/*
	将 Buffer 转换为 JSON 对象
	语法
	将 Node Buffer 转换为 JSON 对象的函数语法格式如下：
	buf.toJSON()
	返回值
	返回 JSON 对象。

*/ 
var buf_03 = new Buffer('www.baidu.com');
var json = buf_03.toJSON(buf_03);
console.log(json.data,json.type);
/*
	缓冲区合并
	语法
	Node 缓冲区合并的语法如下所示：
	Buffer.concat(list[, totalLength])
	参数
	参数描述如下：
	list - 用于合并的 Buffer 对象数组列表。
	totalLength - 指定合并后Buffer对象的总长度。
	返回值
	返回一个多个成员合并的新 Buffer 对象。
*/ 
var first_buf = new Buffer('求知若渴');
var second_buf = new Buffer('www.baidu.com');
var third_buf = Buffer.concat([first_buf,second_buf]);
console.log("third_buf 内容： " + third_buf.toString());


/*
	缓冲区比较
	语法
	Node Buffer 比较的函数语法如下所示, 该方法在 Node.js v0.12.2 版本引入：
	buf.compare(otherBuffer);
	参数
	参数描述如下：
	otherBuffer - 与 buf 对象比较的另外一个 Buffer 对象。
	返回值
	返回一个数字，表示 buf 在 otherBuffer 之前，之后或相同。
*/ 
var buf1 = new Buffer('ABC');
var buf2 = new Buffer('ABCD');
var result = buf1.compare(buf2);
console.log('比较结果： '+ result);


/*
	拷贝缓冲区
	语法
	Node 缓冲区拷贝语法如下所示：
	buf.copy(targetBuffer[, targetStart[, sourceStart[, sourceEnd]]])
	参数
	参数描述如下：
	targetBuffer - 要拷贝的 Buffer 对象。
	targetStart - 数字, 可选, 默认: 0
	sourceStart - 数字, 可选, 默认: 0
	sourceEnd - 数字, 可选, 默认: buffer.length
	返回值
	没有返回值。
*/ 
var buff1 = new Buffer('ABC');
// 拷贝一个缓冲区
var buff2 = new Buffer(3);
buff1.copy(buff2);
console.log('buffe2 content：' + buff2.toString());	

/*
	缓冲区裁剪
	Node 缓冲区裁剪语法如下所示：
	buf.slice([start[, end]])
	参数
	参数描述如下：
	start - 数字, 可选, 默认: 0
	end - 数字, 可选, 默认: buffer.length
	返回值
	返回一个新的缓冲区，它和旧缓冲区指向同一块内存，但是从索引 start 到 end 的位置剪切。
*/ 
var buffer1 = new Buffer('baidu');
// 剪切缓冲区
var buffer2 = buffer1.slice(0,2);
console.log('buffer2 content:' + buffer2.toString());


