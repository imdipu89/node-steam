var fs=require('fs');
var content='';
var write_module1={
    writestream:function(fn){
        var writestream1=fs.createWriteStream(fn);
            writestream1.setDefaultEncoding('UTF8');
            writestream1.on('data',function(chunks){
                content+=chunks;
            });
            writestream1.on('end',function(){
                console.log(content);
            });
    }
}
module.exports=write_module1;