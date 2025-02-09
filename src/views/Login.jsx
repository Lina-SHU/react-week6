import { useState } from "react";
import Swal from "sweetalert2";
import { authService } from "../service/auth.service";
import { useNavigate } from "react-router";

const Login = () => {
    const navigate = useNavigate();
    const [account, setAccount] = useState({ username: '', password: '' });

    const handleInput = (e) => {
        const {name, value} = e.target;

        setAccount({
            ...account,
            [name]: value
        });
    };

    const login = async (e) => {
        e.preventDefault();
        try {
            const res = await authService.login(account);
            if (res.success) {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: res.message,
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate('/admin/products');
            }
        } catch (error) {
            console.log(error);
        }
    };
    
    return (<>
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8 col-lg-6">
                    <form>
                        <h2 className="fs-3 fw-bold text-center mb-3">請先登入</h2>
                        <div className="mb-3">
                            <label htmlFor="username" className="form-label">信箱</label>
                            <input type="email" className="form-control" id="username" name="username" placeholder="請輸入信箱" value={account.username} onChange={handleInput} />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="form-label">密碼</label>
                            <input type="password" className="form-control" id="password" name="password" placeholder="請輸入密碼" value={account.password} onChange={handleInput} />
                        </div>
                        <button type="submit" className="btn btn-primary w-100" onClick={login}>登入</button>
                    </form>
                </div>
            </div>
        </div>
    </>)
};

export default Login;