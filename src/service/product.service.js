import { hexAxios } from './axios';
const apiPath = import.meta.env.VITE_API_PATH;

export const productService = {
    // 取得商品列表
    async getProducts (page = 1) {
        try {
            const res = await hexAxios.get(`/api/${apiPath}/products?page=${page}`);
            if (res.data.success) return res.data;
        } catch (error) {
            console.log(error);
        }
    },
    // 取得單一商品
    async getProduct (id) {
        try {
            const res = await hexAxios.get(`/api/${apiPath}/product/${id}`);
            if (res.data.success) return res.data.product;
        } catch (error) {
            console.log(error);
        }
    }
}