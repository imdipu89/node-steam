var fs=require('fs');
var zlib = require('zlib');
var rs=fs.createReadStream('./write.txt');
rs.pipe(zlib.createGzip()).pipe(fs.createWriteStream('write.txt.gz'));