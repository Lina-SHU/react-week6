import { Outlet, NavLink } from "react-router";

const Layout = () => {
  return (<>
    Layout
    <NavLink to='/about'>about</NavLink>
    <Outlet />
  </>)
};

export default Layout;