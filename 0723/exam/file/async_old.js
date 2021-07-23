const fs = require('fs');
// 비동기 순서 처리, 콜백 지옥
fs.readFile('./writeme.txt', (err, data) => {
	console.log('1번', data.toString());		
		fs.readFile('./writeme.txt', (err, data) => {
			console.log('2번', data.toString());	
				fs.readFile('./writeme.txt', (err, data) => {
					console.log('3번', data.toString());
						fs.readFile('./writeme.txt', (err, data) => {
							console.log('4번', data.toString());
								fs.readFile('./writeme.txt', (err, data) => {
									console.log('5번', data.toString());
				});
			});
		});
	});
});



/* --> 비동기라서 끝나는 결과 순서 유지가 안된다
fs.readFile('./writeme.txt', (err, data) => {
	console.log('1번', data.toString());
});

fs.readFile('./writeme.txt', (err, data) => {
	console.log('2번', data.toString());
});

fs.readFile('./writeme.txt', (err, data) => {
	console.log('3번', data.toString());
});

fs.readFile('./writeme.txt', (err, data) => {
	console.log('4번', data.toString());
});

fs.readFile('./writeme.txt', (err, data) => {
	console.log('5번', data.toString());
});
 */