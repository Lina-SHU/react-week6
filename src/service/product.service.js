import { hexAxios } from './axios';
const apiPath = import.meta.env.VITE_API_PATH;

export const productService = {
    // 取得商品列表
    async getProducts (page = 1) {
        try {
            const res = await hexAxios.get(`/api/${apiPath}/products?page=${page}`);
            if (res.data.success) {
                return {
                    isSuccess: true,
                    data: res.data
                }
            }  else {
                return {
                    isSuccess: false,
                    msg: res.data
                }
            }
        } catch (error) {
            return {
                isSuccess: false,
                msg: error.response.data.message
            }
        }
    },
    // 取得單一商品
    async getProduct (id) {
        try {
            const res = await hexAxios.get(`/api/${apiPath}/product/${id}`);
            if (res.data.success)  {
                return {
                    isSuccess: true,
                    data: res.data.product
                }
            }  else {
                return {
                    isSuccess: false,
                    msg: res.data
                }
            }
        } catch (error) {
            return {
                isSuccess: false,
                msg: error.response.data.message
            }
        }
    }
}