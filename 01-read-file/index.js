let fs = require('fs');
let fileContent = fs.readFileSync('text.txt', 'utf8');
console.log(fileContent);