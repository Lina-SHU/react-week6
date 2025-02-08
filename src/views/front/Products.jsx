import { useEffect, useState } from "react";
import { productService } from '@/service/product.service.js';

const Products = () => {
    const [products, setProducts] = useState([]);

    const getProducts = async () => {
        try {
            const res = await productService.Products();
            setProducts(res.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getProducts();
    }, []);
    return (<>
        { JSON.stringify(products) }
        <p>Products</p>
    </>)
};

export default Products;