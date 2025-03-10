import { hexAxios } from "./axios";

export const authService = {
    // 登入
    async login (account) {
        try {
            const res = await hexAxios.post('/admin/signin', account);
            document.cookie = `ctoken=${res.data.token}; expires=${new Date(res.data.expired)}; path=/`;
            return res.data;
        } catch (error) {
            console.log(error);
        }
    },
    // 登入驗證
    async loginCheck () {
        try {
            const res = await hexAxios.post('/api/user/check');
            return res.data.success;
        } catch (error) {
            console.log(error);
        }
    },
    // 登出
    async logout () {
        try {
            const res = await hexAxios.post('/logout');
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    }
}