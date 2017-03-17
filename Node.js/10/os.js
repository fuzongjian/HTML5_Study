var os = require('os');
//  CPU的字节序
console.log('endianness : ' + os.endianness());

//  操作系统名
console.log('type : ' + os.type());

console.log('platform : ' + os.platform());

// 系统内存总量
console.log('total memory : ' + os.totalmem() + "bytes.")

// 系统空闲内存
console.log('free memory : ' + os.freemem() + "bytes");