/**
 * Created by WangFeng on 2017/2/28.
 */
var exp = require('express');
var Member = require('./info');
var router = exp.Router();

router.get('/search', function (req, res) {
    //无条件查询
    Member.find().exec(function (err, data) {
        if (err) {

        } else {

            data = data.map(function (item) {
                item = item.toObject();
                item.id = item._id.toString();
                delete item._id;
                return item;
            });
            console.log(data);
            res.json(data);
        }
    })
});

module.exports = router;