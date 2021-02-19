var fs=require('fs');
var zlib=require('zlib');
var rf=fs.createReadStream('./home_unzip.txt');
rf.pipe(zlib.createGzip()).pipe(fs.createReadStream('home_unzip.txt.gz'));