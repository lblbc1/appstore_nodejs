/**
 * 厦门大学计算机专业 | 前华为工程师
 * 专注《零基础学编程系列》  http://lblbc.cn/note
 * 包含：Java | 安卓 | 前端 | Flutter | iOS | 小程序 | 鸿蒙
 * 公众号：蓝不蓝编程
 */
const { sequelize } = require('@core/db')
const { AppInfo } = require('@models/app_info')

class AppDao {

  static async queryByCategory(categoryId) {
    const { QueryTypes } = require('sequelize');
    let sql = "SELECT aa.id,aa.name,aa.logo_url logoUrl,aa.screenshot_urls screenshotUrls,aa.description,aa.apk_url apkUrl,aa.file_size fileSize,aa.download_count downloadCount FROM appstore_app_category ac,appstore_app aa WHERE ac.app_id=aa.id AND ac.category_id=" + categoryId
    try {
      let result = await sequelize.query(sql, { type: QueryTypes.SELECT });
      return [null, result]
    } catch (err) {
      console.log(err)
      return [err, null]
    }
  }

  static async search(keyword) {
    try {
      const seq = require('sequelize');
      const Op = seq.Op;
      let filter = { name: { [Op.like]: `%${keyword}%` } }
      let result = await AppInfo.findAndCountAll({ where: filter, });
      return [null, result.rows];
    } catch (err) {
      return [err, null]
    }
  }

  static async queryApp(id) {
    try {
      let filter = { id }
      let result = await AppInfo.findOne({ where: filter, });
      return [null, result];
    } catch (err) {
      return [err, null]
    }
  }
}

module.exports = {
  AppDao
}
