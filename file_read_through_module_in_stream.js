var fs=require("fs");
//const { read } = require("fs");
var content = "";
//var readstream=fs.createReadStream();
var readStreams={
    read1_module:function(fn){
      var readStream = fs.createReadStream(fn);
      readStream.setEncoding("UTF8");
      readStream.on('data', function(chunks){
          content += chunks;
      });

      readStream.on('end', function(){
          console.log(content);
      });
    }
}
module.exports=readStreams;