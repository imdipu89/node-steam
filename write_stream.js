var fs=require('fs');
var content="i m in node stream";
var ws=fs.createWriteStream('./write.txt');
ws.write(content,"UTF8");
ws.end();
ws.on("finish",function(){
    console.log("data finished");
});