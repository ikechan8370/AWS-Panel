import axios from 'axios';
import cookie from "vue-cookie";
let api = axios.create({
    baseURL: `http://localhost:8011`,
    withCredentials: true,
    validateStatus: function (status) {
        return status < 500;
    },
})
api.interceptors.request.use(function (config) {
    // Do something before request is sent
    let ls = cookie.get("loginSession")
    if (ls) {
        config.headers.loginSession = cookie.get("loginSession")
    }
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

export default api;