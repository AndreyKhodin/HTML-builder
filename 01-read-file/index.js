let fs = require('fs');
//let fileContent = fs.readFileSync('text.txt', 'utf8');
//console.log(fileContent);

var stream = new fs.ReadStream('text.txt', {encoding: 'utf-8'});
 
stream.on('readable', function(){
    var data = stream.read();
    console.log(data);
});
 
 //stream.on('end', function(){
 //   console.log("THE END");
//});