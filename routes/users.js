const router = require('koa-router')()
const userModel = require('../models/user.js');

router.prefix('/users')

router.post('/get', async (ctx, next)=>{

  var account = '13250801281';
  var password = '123456';

  await userModel.getUserByLogin([account,password]).then(res => {
    ctx.body = {
      code:200,
      mesaage:'success',
      data:res
    }
  }).catch(err => {
    ctx.body = {
      code:100,
      mesaage:'系统出错'
    }
  });  

})

router.post('/list', function (ctx, next) {
  ctx.body = {
    code:200,
    message:'success',
    data:{
      list:[]
    }
  }
})

module.exports = router
