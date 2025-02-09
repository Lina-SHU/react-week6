import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { productService } from '../../service/product.service';
import { NavLink } from "react-router";

const Product = () => {
    const params = useParams();
    console.log(params);

    const [product, setProduct] = useState({});
    const getProduct = async (id) => {
        try {
            const res = await productService.getProduct(id);
            setProduct(res);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        getProduct(params.id);
    }, [params.id]);

    return (<>
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6">
                    <img src={product.imageUrl} alt={product.title} className="img-fluid" />
                </div>
                <div className="col-md-6 d-flex flex-column justify-content-between">
                    <h1>{product.title}</h1>
                    <div className="d-flex justify-content-between align-items-center text-danger">
                        <div>
                            <del className="text-dark">{product.origin_price}</del>
                            <span className="fs-5 ms-2">{product.price}</span>元
                        </div>
                        <NavLink to="/cart" className="btn btn-primary">檢視購物車</NavLink>
                    </div>
                </div>
            </div>
        </div>
    </>)
};

export default Product;