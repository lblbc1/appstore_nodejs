/**
 * 厦门大学计算机专业 | 前华为工程师
 * 专注《零基础学编程系列》  http://lblbc.cn/blog
 * 包含：Java | 安卓 | 前端 | Flutter | iOS | 小程序 | 鸿蒙
 * 公众号：蓝不蓝编程
 */
const Router = require('koa-router');
const { AppDao } = require('@dao/app');
const { Resolve } = require('@lib/helper');
const res = new Resolve();

const router = new Router({
  prefix: '/appstore'
})

/**
 * 按照分类查询应用列表
 */
router.get('/apps', async (ctx) => {
  const { categoryId } = ctx.query;
  const [err, data] = await AppDao.queryByCategory(categoryId);
  if (!err) {
    ctx.response.status = 200;
    ctx.body = res.json(data)
  } else {
    ctx.body = res.fail(err)
  }
});

/**
 * 搜索应用
 */
router.get('/appsBySearch', async (ctx) => {
  const { keyword } = ctx.query;
  const [err, data] = await AppDao.search(keyword);
  if (!err) {
    ctx.response.status = 200;
    ctx.body = res.json(data)
  } else {
    ctx.body = res.fail(err)
  }
});

/**
 * 查询应用详情
 */
router.get('/app/:id', async (ctx) => {
  const id = ctx.params['id'];
  const [err, data] = await AppDao.queryApp(id);
  if (!err) {
    ctx.response.status = 200;
    ctx.body = res.json(data);
  } else {
    ctx.body = res.fail(err);
  }
})

module.exports = router
