import Layout from "../components/Layout";
import Home from "../views/front/Home";
import About from "../views/front/About";
import Products from "../views/front/Products";
import Product from "../views/front/Product";
import Cart from "../views/front/Cart";
import Login from "../views/Login";
import AdminLayout from "../components/AdminLayout";
import AdminProducts from "../views/admin/Products";
import AdminOrders from "../views/admin/Orders";
import AdminCoupons from "../views/admin/Coupons";

const routes = [
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '',
                element: <Home />
            },
            {
                path: 'about',
                element: <About />
            },
            {
                path: 'products',
                element: <Products />
            },
            {
                path: 'product/:id',
                element: <Product />
            },
            {
                path: 'cart',
                element: <Cart />
            }
        ]
    },
    {
        path: '/login',
        element: <Login />
    },{
        path: '/admin',
        element: <AdminLayout />,
        children: [
            {
                path: 'products',
                element: <AdminProducts />
            },
            {
                path: 'orders',
                element: <AdminOrders />
            },
            {
                path: 'coupons',
                element: <AdminCoupons />
            }
        ]
    }

];

export default routes;