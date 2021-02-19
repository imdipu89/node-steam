var fs=require('fs');
var zlib = require('zlib');
var rs=fs.createReadStream('./write.txt.gz');
rs.pipe(zlib.createGunzip()).pipe(fs.createWriteStream('write1.txt'));