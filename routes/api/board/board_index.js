const router = require('express').Router();
const dao = require('./board_dao'); //데이터 모듈 호출

// get
router.get("/",dao.list); // GET방식으로 접근 시 dao.list 모듈 실행
router.get('/:num',dao.view); // 상세페이지 추가

// post
router.post("/",dao.add);  //api/board post 방식으로 접근 시 모듈 실행

router.put('/',dao.mod);  // 수정 추가

router.delete('/',dao.delete); // 삭제 모듈 추가

router.all('*',(req, res)=> {
	res.status(404).send({success:false, msg:'board unknown uri ${req.path}'});
})

module.exports = router;