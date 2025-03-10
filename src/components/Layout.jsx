import { Outlet, NavLink } from "react-router";

const Layout = () => {
  const isActiveClass = (style) => {
    return style.isActive ? 'header-nav-active' : ''
  };

  return (<>
    <NavLink to='/about' className={isActiveClass}>關於我們</NavLink> |
    <NavLink to='/products' className={isActiveClass}>商品列表</NavLink> |
    <NavLink to='/cart' className={isActiveClass}>購物車</NavLink>
    <NavLink to='/login' className={isActiveClass}>登入</NavLink>
    <Outlet />
  </>)
};

export default Layout;