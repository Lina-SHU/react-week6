import { useEffect, useState } from "react";
import { productService } from '../../service/product.service';
import { NavLink } from "react-router";

const Products = () => {
    const [products, setProducts] = useState([]);
    const [pagintaion, setPagintaion] = useState([]);

    const getProducts = async () => {
        try {
            const res = await productService.getProducts();
            setProducts(res.products);
            setPagintaion(res.pagintaion);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getProducts();
    }, []);
    return (<>
        <div className="container mt-5">
            <div className="row">
                {
                    products.map((prd) => {
                        return (
                            <div className="col-md-6 col-lg-3 mb-3" key={prd.id}>
                                <div className="card h-100">
                                    <img src={prd.imageUrl} className="card-img-top object-fit-cover" height="200" alt={prd.title} />
                                    <div className="card-body">
                                        <h5 className="card-title">{prd.title}</h5>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <p className="card-text mb-0">{prd.price}</p>
                                            <NavLink to={`/product/${prd.id}`} className="btn btn-primary btn-sm">詳細資訊</NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </>)
};

export default Products;