var fs=require('fs');
var content='i  m in node phase';
var readstream=fs.createReadStream('./write.txt');
var ws=fs.createWriteStream('./write.txt')
ws.write(content,'UTF8')
ws.end();
ws.on('finish',function(){
    console.log("data finsihed");
});
readstream.setEncoding('UTF8');
var content='i  m in node phase';
readstream.on('data',function(chunks){
    content+=chunks;
});
readstream.on('end',function(){
    console.log(content);
});
