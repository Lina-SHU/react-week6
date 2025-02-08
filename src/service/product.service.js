import { hexAxios } from './axios';
const apiPath = import.meta.env.VITE_API_PATH;

export const productService = {
    // 取得商品列表
    async getProducts () {
        try {
            const res = await hexAxios.get(`/api/${apiPath}/products`);
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    },
    // 取得單一商品
    async getProduct (id) {
        try {
            const res = await hexAxios.get(`/api/${apiPath}/product/${id}`);
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    }
}