var fs=require('fs');
var content='i  m in node phase';
var rs=fs.createReadStream('./write.txt');
var ws=fs.createWriteStream('./write.txt')
ws.write(content,'UTF8')
ws.end();
ws.on('finish',function(){
    console.log("data finsihed");
});
rs.setEncoding('UTF8');
rs.on('data',function(chunks){
    content+=chunks;
});
rs.on('end',function(){
    console.log(content);
});
