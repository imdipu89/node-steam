var fs=require('fs');
var rs=fs.createReadStream('./write.txt');
var ws=fs.createWriteStream('./write2.txt');
rs.pipe(ws);
