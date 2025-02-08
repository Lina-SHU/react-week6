import { Outlet, NavLink } from "react-router";

const AdminLayout = () => {
  return (<>
    AdminLayout
    <NavLink to='/admin/products'>商品管理</NavLink> |
    <NavLink to='/admin/orders'>訂單管理</NavLink> |
    <NavLink to='/admin/coupons'>優惠券管理</NavLink>
    <Outlet />
  </>)
};

export default AdminLayout;