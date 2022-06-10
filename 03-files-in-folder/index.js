
const fs = require('fs');
const path = require ('path');

fs.readdir('secret-folder', (err, files) => {
if (err)
	console.log(err);
else {
	console.log("\nCurrent directory filenames:");
	files.forEach(file => {
	console.log(file);
	})
}
})

// Function to get current filenames
// in directory with "withFileTypes"
// set to "true"

fs.readdir('secret-folder',
{ withFileTypes: true },
(err, files) => {
console.log("\nCurrent directory files:");
if (err)
	console.log(err);
else {
	files.forEach(file => {
	console.log(file);
	})
}
})
