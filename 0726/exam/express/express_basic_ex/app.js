const express = require('express');
const app = express();

/* 서버 포트 */
app.set('PORT', 3000);


/* 공통 라우터 */
app.use((req, res, next) => {
	console.log("공통 라우터");
	next();
});

/* GET 방식 라우터 /join */
app.get("/join", (req, res) => {
	return res.send("<h1>회원 가입 페이지 입니다.</h1>");
});
/* GET 방식 라우터 /login */
app.get("/login", (req, res) => {
	return res.send("<h1>로그인 페이지 입니다.</h1>");	
});



/* 없는 페이지 처리 라우터 - 모든 요청에 대응하는 라우터가 가장 하단에 있는 경우 */
app.use((req, res, next) => {
	// return res.status(404).send(req.url + "가 존재하지 않습니다.");
	return res.status(404).send(` ${req.url}은 없는 페이지 입니다.` );
	// 템플릿 리터럴 사용해서 더 깔끔
});


/* 서버 포트 */
app.listen(app.get('PORT'), () => {
	console.log(app.get('PORT'), "포트에서 서버 대기중");
});
