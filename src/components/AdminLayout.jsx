import { Outlet, NavLink } from "react-router";

const AdminLayout = () => {
  return (<>
    AdminLayout
    <br />
    <NavLink to='/admin/products'>商品管理</NavLink> |
    <NavLink to='/admin/orders'>訂單管理</NavLink> |
    <NavLink to='/admin/coupons'>優惠券管理</NavLink>
    <hr />
    <Outlet />
  </>)
};

export default AdminLayout;