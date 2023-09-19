//引入axios
import axios from 'axios'

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

//导出axios实例对象api
export default api
