/**
 * 厦门大学计算机专业 | 前华为工程师
 * 专注《零基础学编程系列》  http://lblbc.cn/blog
 * 包含：Java | 安卓 | 前端 | Flutter | iOS | 小程序 | 鸿蒙
 * 公众号：蓝不蓝编程
 */
const { sequelize } = require('@core/db')
const { Model, DataTypes } = require('sequelize')
const { AppInfo } = require('./app_info')
const { Category } = require('./category')
class AppCategory extends Model {
}

AppCategory.init({
  id: { type: DataTypes.TEXT, primaryKey: true },
  appId: {
    type: DataTypes.TEXT,
    references: {
      model: AppInfo,
      key: 'id'
    }
  },
  categoryId: {
    type: DataTypes.TEXT,
    references: {
      model: Category,
      key: 'id'
    }
  }
}, {
  sequelize,
  modelName: 'appstore_app_category',
  tableName: 'appstore_app_category'
})

module.exports = {
  AppCategory
}
