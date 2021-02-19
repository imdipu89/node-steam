var fs=require('fs');
var zlib=require('zlib');
var rs=fs.createReadStream('home.txt.gz');
rs.pipe(zlib.createGunzip()).pipe(fs.createWriteStream('home1.txt'));