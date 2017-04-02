/**
 * Created by WangFeng on 2017/3/1.
 */

const exp = require('express');
const fs = require('fs');
const router = exp.Router();

router.post('/api/register', (req, res) => {
    fs.writeFile('user.txt', JSON.stringify(req.body), (err) => {
        if (err) {
            res.json({code: 'error', msg: '注册失败'});
        } else {
            res.json({code: 'success', msg: '注册成功'});
        }
    });
});

module.exports = router;


