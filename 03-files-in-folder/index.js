
const fs = require('fs');
const path = require ('path');
const { serialize } = require('v8');
const folder = path.join(__dirname, 'secret-folder')

fs.readdir(folder, (err, data) => {
    if (err) console.log(err.message);
    //Метод forEach() выполняет указанную функцию один раз для каждого элемента в массиве.
  data.forEach(file =>{
    const pathFile = path.join(folder, file);
    //асинхронный метод stat, который получает первым 
    //аргументом путь к элементу файловой системы, 
    //находит информацию о нем в inode, затем вызывает функцию-коллбек 
    //(обратный вызов, переданный вторым аргументом). 
    //В коллбек будет передан объект fs.Stats.
    fs.stat(pathFile, (error, stats) => {
        if (error) {
            console.log(error);
        } else {
            if (stats.isFile()){
                const ext = path.extname(pathFile);
                console.log(path.basename(pathFile, ext) + '-' + ext.slice(1, ext.length) + '-'+stats.size + 'b');
                console.log('    file');
                
            }
        }

    });
});
});


// else {
//	console.log("\nCurrent directory filenames:");
//	files.forEach(file => {
//	console.log(file);
//	})
//}
//})

// Функция получает текущее имя
// in directory with "withFileTypes"
// set to "true"

//fs.readdir('secret-folder',
//{ withFileTypes: true },
//(err, files) => {
//console.log("\nCurrent directory files:");
//if (err)
//	console.log(err);
//else {
//	files.forEach(file => {
//	console.log(file);
//	})
//}
//})
