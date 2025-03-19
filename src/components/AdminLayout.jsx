import Swal from "sweetalert2";
import { Outlet, NavLink } from "react-router";
import { authService } from "../service/auth.service";
import { useNavigate } from "react-router";

const AdminLayout = () => {
  const navigate = useNavigate();

  const logout = async () => {
    const res = await authService.logout();
    if (!res.isSuccess) {
      Swal.fire({
          position: 'center',
          icon: 'error',
          title: res.msg,
          showConfirmButton: false,
          timer: 1500
      });
      return
    }
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: res.msg,
        showConfirmButton: false,
        timer: 1500
    });
    navigate('/login');
  };
  return (<>
    AdminLayout
    <br />
    <NavLink to='/admin/products'>商品管理</NavLink> |
    <NavLink to='/admin/orders'>訂單管理</NavLink> |
    <NavLink to='/admin/coupons'>優惠券管理</NavLink> |
    <a href="#" onClick={logout}>登出</a>
    <hr />
    <Outlet />
  </>)
};

export default AdminLayout;