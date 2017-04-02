/**
 * Created by WangFeng on 2017/3/1.
 */
const exp = require('express'),
    fs = require('fs'),
    router = exp.Router();


router.post('/api/login', (req, res) => {
    fs.readFile('user.txt', (err, data) => {
        if (err) {
            res.json({code: 'error', msg: '系统错误'});
        } else {
            var user = JSON.parse(data);
            if (req.body.username == user.username && req.body.password == user.password) {
                res.json({code: 'success', msg: '登录成功'});
            }else {
                if(req.body.username == user.username) {
                    res.json({code:'e',msg:'密码错误,请重新登录'})
                }else {
                    res.json({code:'e',msg:'用户名错误,请重新登录'})
                }
            }
        }
    })
});

module.exports = router;