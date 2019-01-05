import axiosInstance from './axiosInstance'
import get from './get'
import post from './post'

/**
 * ajax 方法
 * bug: 必须使用 export default ，详见单元测试文件 ajax.spec.js
 */
export default {
  axiosInstance,
  get,
  post,
}
