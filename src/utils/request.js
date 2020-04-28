import axios from "axios";

const baseUrl = "/api";

// 添加请求拦截器
axios.interceptors.request.use(
  (config) => {
    // config.headers['Access-Control-Allow-Origin'] = '*'
    console.log(config);
    return config;
  },
  (error) => {
    console.log("拦截器错误", error);
  }
);

export default function request(url, options = {}) {
  return axios({
    url: baseUrl + url,
    method: options.method || "get",
    data: options.data || {},
    responseType: options.responseType || "json",
  })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
}
