//引入axios
import type { DATA } from '@/types/request'
import axios, {
  type AxiosRequestConfig,
  type AxiosResponse,
  type InternalAxiosRequestConfig
} from 'axios'
//引入工具包
import utils from '@/utils/utils'

//创建axios实例对象
const api = axios.create({
  //基准地址
  baseURL: '',
  //请求头
  headers: {
    'Content-Type': 'application/json; charset=UTF-8'
  },
  //超时时间
  timeout: 30 * 1000,
  // `withCredentials` 表示跨域请求时是否需要使用凭证
  withCredentials: true, // default
  // `responseType` 表示浏览器将要响应的数据类型
  // 选项包括: 'arraybuffer', 'document', 'json', 'text', 'stream'
  // 浏览器专属：'blob'
  responseType: 'json', // 默认值
  // `responseEncoding` 表示用于解码响应的编码 (Node.js 专属)
  // 注意：忽略 `responseType` 的值为 'stream'，或者是客户端请求
  // Note: Ignored for `responseType` of 'stream' or client-side requests
  responseEncoding: 'utf8' // 默认值
})
// 请求拦截
api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)
// 响应拦截
api.interceptors.response.use(
  (Response: AxiosResponse) => {
    if (Response.status === 200) {
      const data = Response.data
      // 全局异常处理
      if (data.code !== 888) {
        return utils.showError(data.message || '发生错误')
      }
      return data
    }
    if (Response.status === 401) {
      // TODO token过期处理、
      return
    }
    utils.showError('请求失败')
  },
  (error) => {
    utils.showError(error.response.statusText || '请求失败')
    return Promise.reject(error)
  }
)
// 封装请求方式
const request = <T>(config: AxiosRequestConfig) => {
  if (config.method?.toLocaleLowerCase() === 'get') {
    config.params = config.data
    delete config.data
  }
  return api.request<T, DATA<T>>(config)
}

//导出axios实例对象api
export default request
