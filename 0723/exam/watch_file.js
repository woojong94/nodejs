const 'fs' = require('fs')

fs.watchFile('./watch.txt', (type, filename) => {
	console.log(type, filename);
});