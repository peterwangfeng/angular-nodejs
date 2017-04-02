/**
 * Created by WangFeng on 2017/2/28.
 */
// 添加数据
var exp = require('express');
var Member = require('./info');
var router = exp.Router();

router.post('/add',function (req,res) {
    var member = new Member(req.body);
    member.save(function (error) {
        if(!error){
            res.json({code:'success',msg:'添加成功'});
        }else{
            res.json({code:'error',msg:'添加失败,请重新添加'});
        }
    })
});

module.exports = router;