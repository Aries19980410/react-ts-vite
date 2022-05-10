import request from "@/utils/request";

export const login = (data:any) => {
    return request({
        url: 'sys/login',
        method: 'post',
        data: data
    })
}

export const getInfo = () => {
    return request({
        url: 'auth/info',
        method: 'get'
    })
}

export const getCodeImg = (uuid:any) => {
    return request({
        url: 'captcha.jpg',
        method: 'get',
        responseType:"arraybuffer",
        params:{
            uuid
        }
    })
}

export const logout = () => {
    return request({
        url: 'auth/logout',
        method: 'delete'
    })
}