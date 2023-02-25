/**
 * 厦门大学计算机专业 | 前华为工程师
 * 专注《零基础学编程系列》  http://lblbc.cn/blog
 * 包含：Java | 安卓 | 前端 | Flutter | iOS | 小程序 | 鸿蒙
 * 公众号：蓝不蓝编程
 */
const { sequelize } = require('@core/db')
const { Model, DataTypes } = require('sequelize')
class Category extends Model {
}

Category.init({
  id: { type: DataTypes.TEXT, primaryKey: true },
  name: { type: DataTypes.TEXT }
}, {
  sequelize,
  modelName: 'appstore_category',
  tableName: 'appstore_category'
})

module.exports = {
  Category
}
