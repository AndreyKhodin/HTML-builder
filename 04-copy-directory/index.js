	
// Include fs and path module
const fs = require('fs');
const fsPromises = fs.promises;
const path = require ('path');
//const async = require('async');

//function mdir (){
fsPromises.mkdir('files-copy').then(function() {
	console.log('Directory created successfully');
}).catch(function() {
	console.log('failed to create directory');
});
//}

//function readd (){
    fs.readdir (path.join(__dirname,'files'),(err,files)=>{
      if(err) console.log(err);
      //function copyf(){    

        files.forEach(element => {     
        fs.copyFile((path.join(__dirname,'files',element)), (path.join(__dirname,'files-copy',element)), err => {
          if(err) console.log(error); // не удалось скопировать файл
          console.log('Файл успешно скопирован');
        });
      });
    
      });
  //}
  
 // async function rune (){
 // mdir();
//  readd();
  
// function getFiles (dirPath, callback) {

//     fs.readdir(dirPath, function (err, files) {
//         if (err) return console.log(err.message);

//         var filePaths = [];
//         async.eachSeries(files, function (fileName, eachCallback) {
//             var filePath = path.join(dirPath, fileName);

//             fs.stat(filePath, function (err, stat) {
//                 if (err) return eachCallback(err);

//                 if (stat.isDirectory()) {
//                     getFiles(filePath, function (err, subDirFiles) {
//                         if (err) return eachCallback(err);

//                         filePaths = filePaths.concat(subDirFiles);
//                         eachCallback(null);
//                     });

//                 } else {
//                     if (stat.isFile() && /\.js$/.test(filePath)) {
//                         filePaths.push(filePath);
//                     }

//                     eachCallback(null);
//                 }
//             });
//         }, function (err) {
//             callback(err, filePaths);
//         });

//     });
// }


//getFiles('./', function (err, files) {
 //    console.log(err || files);
 //});