/**
 * Created by WangFeng on 2017/2/28.
 */
// http://cnodejs.org/topic/504b4924e2b84515770103dd

// 在项目只能够创建一个数据库连接
const mongoose = require('mongoose');////引用mongoose模块
mongoose.connect('mongodb://192.168.1.168/memberDB');

const db = mongoose.connection; //创建一个数据库连接
// 打开本机localhost的test数据库时，我们可以监测是否有异常
db.on('open',()=>{
    console.log('打开数据库');
});
// 成功开启数据库后，就可以执行数据库相应操作
// 定义一个Schema 数据库中的Schema，为数据库对象的集合，一个用户一般对应一个schema。
var schema  = mongoose.Schema({
    name:String,//定义一个属性name，类型为String
    age:String,
    sex:String,
    phone:String,
    address:String,
    info:String
});
// 通过Schema创建Model
var Member =  mongoose.model('infos',schema);

module.exports = Member;
