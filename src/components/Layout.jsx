import { Outlet, NavLink } from "react-router";

const Layout = () => {
  const isActiveClass = (style) => {
    return style.isActive ? 'header-nav-active' : ''
  };

  return (<>
    <NavLink to='/about' className={isActiveClass}>about</NavLink>
    <NavLink to='/products' className={isActiveClass}>products</NavLink>
    <Outlet />
  </>)
};

export default Layout;