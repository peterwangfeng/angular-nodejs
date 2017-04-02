/**
 * Created by WangFeng on 2017/2/28.
 */
var exp = require('express');
var Member = require('./info');
var router = exp.Router();

router.get('/edit/:id', function (req, res) {
    var id = req.params.id;
    Member.findById(id).exec(function (err, data) {
        if (err) {
        } else {
            res.json(data);
        }
    })
});

router.post('/api/edit/:id', function (req, res) {
    var id = req.params.id;
    var data = req.body;
    console.log(id);
    console.log(data);
    Member.findByIdAndUpdate(id, req.body, function (err) {
        if (err) {

        } else {
            res.json({code:'success',msg:'修改成功'})
        }
    })
});
// Member.update({name:},{age:100,isMale:false},function(err){
    //     if(!err){
    //         console.log('修改数据成功')
    //     }
    // })
module.exports = router;