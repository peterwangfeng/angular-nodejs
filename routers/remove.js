/**
 * Created by WangFeng on 2017/2/28.
 */
var exp = require('express');
var Member = require('./info');
var router = exp.Router();

router.get('/remove/:id',function(req,res){
    var id = req.params.id;
    console.log(id);
    console.log(id);
    //从数据库中把数据删除
    Member.findByIdAndRemove(id,function(err){
        if(err){
            res.json({code:'success',msg:'删除成功'});
        }else{
            res.json({code:'error',msg:'删除失败,请重新删除'});
        }
    })
});

module.exports = router ;