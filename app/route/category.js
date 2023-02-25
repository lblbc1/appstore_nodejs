/**
 * 厦门大学计算机专业 | 前华为工程师
 * 专注《零基础学编程系列》  http://lblbc.cn/blog
 * 包含：Java | 安卓 | 前端 | Flutter | iOS | 小程序 | 鸿蒙
 * 公众号：蓝不蓝编程
 */
const Router = require('koa-router');
const { CategoryDao } = require('@dao/category');
const { Resolve } = require('@lib/helper');
const res = new Resolve();

const router = new Router({
  prefix: '/appstore'
})

/**
 * 查询所有应用分类
 */
router.get('/categories', async (ctx) => {
  const [err, data] = await CategoryDao.queryCategory();
  if (!err) {
    ctx.response.status = 200;
    ctx.body = res.json(data)
  } else {
    ctx.body = res.fail(err)
  }
});

module.exports = router
