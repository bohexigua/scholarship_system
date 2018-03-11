const router = require('koa-router')()
const user = require('../controllers/user')

router.post('/login', user.login)

router.post('/setUserInfo', user.setUserInfo)

router.get('/getUserInfo', user.getUserInfo)

router.post('/setPovertyLevel', user.setPovertyLevel)

router.get('/getPovertyLevel', user.getPovertyLevel)

router.get('/getPovertyLevelAll', user.getPovertyLevelAll)

router.get('/getPovertyLevelClassAll', user.getPovertyLevelClassAll)

router.post('/setPovertyLevelSubmit', user.setPovertyLevelSubmit)

router.post('/setPovertyLevelDone', user.setPovertyLevelDone)

router.post('/setAwardSubmit', user.setAwardSubmit)

router.post('/setAwardDone', user.setAwardDone)

router.post('/setInform', user.setInform)

router.post('/setUser', user.setUser)

router.post('/applyAward', user.applyAward)

router.get('/getInform', user.getInform)

router.get('/getAwardUserInfo', user.getAwardUserInfo)

router.get('/getAward', user.getAward)

router.get('/getGrant', user.getGrant)

router.get('/', (ctx, next) => {
});

module.exports = router