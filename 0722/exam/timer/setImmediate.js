const timeout = setTimeout(() => {
	console.log('지연 실행');
}, 5000);

clearTimeout(timeout); // 지연 실행 취소

const interval = setInterval(() => {
		console.log('지연 반복 실행');
}, 1000);

const immediate = setTimeout(() => {
	clearInterval(interval);
}, 5000);

clearImmediate(immediate); // 비동기 즉시 실행 취소

setImmediate(() => {
	console.log('즉시 실행');
	// setTImeout(function() {}, 0);
});