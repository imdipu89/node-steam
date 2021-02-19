var fs=require('fs');
var content="";
var readstream=fs.createReadStream('./write.txt');
readstream.setEncoding('UTF8');
readstream.on('data',function(chunks){
    content +=chunks;
});
readstream.on('end',function(){
    console.log(content);
});