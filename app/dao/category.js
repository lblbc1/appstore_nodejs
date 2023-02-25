/**
 * 厦门大学计算机专业 | 前华为工程师
 * 专注《零基础学编程系列》  http://lblbc.cn/note
 * 包含：Java | 安卓 | 前端 | Flutter | iOS | 小程序 | 鸿蒙
 * 公众号：蓝不蓝编程
 */
const { Category } = require('@models/category')

class CategoryDao {

  static async queryCategory() {
    try {
      const data = await Category.findAndCountAll();
      let rows = data.rows
      return [null, rows]
    } catch (err) {
      return [err, null]
    }
  }

}

module.exports = {
  CategoryDao
}
