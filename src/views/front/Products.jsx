import { useEffect, useState } from "react";
import { productService } from '../../service/product.service';
import { NavLink } from "react-router";

const Products = () => {
    const [products, setProducts] = useState([]);
    const [pagintaion, setPagintaion] = useState({});

    const getProducts = async (page = 1) => {
        try {
            const res = await productService.getProducts(page);
            setProducts(res.products);
            setPagintaion(res.pagination);
        } catch (error) {
            console.log(error);
        }
    };

    const getProductItems = (e, page) => {
        e.preventDefault();
        getProducts(page);
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
                <nav aria-label="Page navigation example">
                    <ul className="pagination">
                        <li className={`page-item ${!pagintaion.has_pre && 'disabled'}`}><a className="page-link" href="#" onClick={(e) => getProductItems(e, pagintaion.current_page - 1)}>上一頁</a></li>
                        {
                            pagintaion.total_pages && Array.from({ length: pagintaion.total_pages }, (_, i) => i + 1).map((page) => {
                                return (<li key={page} className={`page-item ${pagintaion.current_page && pagintaion.current_page === page && 'active'}`}><a className="page-link" href="#" onClick={(e) => getProductItems(e, page)}>{page}</a></li>)
                            })
                        }
                        <li className={`page-item ${!pagintaion.has_next && 'disabled'}`}><a className="page-link" href="#" onClick={(e) => getProductItems(e, pagintaion.current_page + 1)}>下一頁</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    </>)
};

export default Products;