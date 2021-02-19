var fs=require('fs');
var zlib=require('zlib');
var rs=fs.createReadStream('home.txt');
rs.pipe(zlib.createGzip()).pipe(fs.createWriteStream('home.txt.gz'));
