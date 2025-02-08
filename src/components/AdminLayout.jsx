import { Outlet, NavLink } from "react-router";

const AdminLayout = () => {
  return (<>
    AdminLayout
    <NavLink to='/admin/products'>products</NavLink>
    <Outlet />
  </>)
};

export default AdminLayout;