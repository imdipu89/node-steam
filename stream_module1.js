var fs=require('fs');
var content="";
var read1_module={
    readStream1:function(fn){
        var readStream=fs.createReadStream(fn);
        readStream.setEncoding('UTF8');
        readStream.on('data',function(chunks){
            content+="chunks";
        });
        readStream.on("end",function(){
            console.log(data)
        });
    }
}
module.exports=read1_module;