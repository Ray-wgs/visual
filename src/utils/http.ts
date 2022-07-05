import axios from 'axios'
const service = axios.create({
    baseURL: '/api', // api的base_url
    withCredentials: true,
    timeout: 60000, // 请求超时时间
});
declare module 'axios' {
    interface AxiosInstance {
        (config: AxiosRequestConfig): Promise<any>
    }
}
service.interceptors.request.use(config => {
    return config
}, error => {
    Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(
    response => {
        const res = response.data
        return res
    },
)

export default service