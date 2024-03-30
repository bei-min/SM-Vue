import axios from 'axios'

//封装post/get请求
export default {
    post(url, data) {
        return new Promise((resolve, reject) => {
            axios({
                method: 'post',
                url,
                data,
                //data: qs.stringify(data), //参数序列化
            })
                .then(res => {
                    resolve(res.data)
                })
                .catch(err => {
                    reject(err)
                });
        })
    },

    get(url, data) {
        return new Promise((resolve, reject) => {
            axios({
                method: 'get',
                url,
                params: data,
            })
                .then(res => {
                    resolve(res.data)
                })
                .catch(err => {
                    reject(err)
                })
        })
    }
};
