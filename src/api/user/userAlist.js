import { request } from '@/utils/request.js'

/**
 * 用户列表 API JS
 */

export default {

  /**
   * 获取用户列表分页列表
   * @returns
   */
  getList (params = {}) {
    return request({
      url: 'user/alist/index',
      method: 'get',
      params
    })
  },

  /**
   * 添加用户列表
   * @returns
   */
  save (data = {}) {
    return request({
      url: 'user/alist/save',
      method: 'post',
      data
    })
  },

  /**
   * 更新用户列表数据
   * @returns
   */
  update (id, data = {}) {
    return request({
      url: 'user/alist/update/' + id,
      method: 'put',
      data
    })
  },

  /**
   * 读取用户列表
   * @returns
   */
  read (data = {}) {
    return request({
      url: 'user/alist/read',
      method: 'get',
      data
    })
  },

  /**
   * 将用户列表删除，有软删除则移动到回收站
   * @returns
   */
  deletes (data) {
    return request({
      url: 'user/alist/delete',
      method: 'delete',
      data
    })
  },

  /**
   * 从回收站获取用户列表数据列表
   * @returns
   */
  getRecycleList (params = {}) {
    return request({
      url: 'user/alist/recycle',
      method: 'get',
      params
    })
  },

  /**
   * 恢复用户列表数据
   * @returns
   */
  recoverys (data) {
    return request({
      url: 'user/alist/recovery',
      method: 'put',
      data
    })
  },

  /**
   * 真实删除用户列表
   * @returns
   */
  realDeletes (data) {
    return request({
      url: 'user/alist/realDelete',
      method: 'delete',
      data
    })
  },

  /**
   * 更改用户列表数据
   * @returns
   */
  changeStatus (data = {}) {
    return request({
      url: 'user/alist/changeStatus',
      method: 'put',
      data
    })
  },

  /**
   * 修改用户列表数值数据，自增自减
   * @returns
   */
  numberOperation (data = {}) {
    return request({
      url: 'user/alist/numberOperation',
      method: 'put',
      data
    })
  },

  /**
    * 用户列表导入
    * @returns
    */
  importExcel (data = {}) {
    return request({
      url: 'user/alist/import',
      method: 'post',
      data
    })
  },

  /**
   * 用户列表下载模板
   * @returns
   */
  downloadTemplate () {
    return request({
      url: 'user/alist/downloadTemplate',
      method: 'post',
      responseType: 'blob'
    })
  },

  /**
   * 用户列表导出
   * @returns
   */
  exportExcel (params = {}) {
    return request({
      url: 'user/alist/export',
      method: 'post',
      responseType: 'blob',
      params
    })
  },


}