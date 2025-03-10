import Swal from "sweetalert2";
import { authService } from "../service/auth.service";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import Input from "../components/Input";
import { useEffect } from "react";

const Login = () => {
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        mode: 'onTouched'
    });

    const checkLogin = async () => {
        try {
            return await authService.loginCheck();
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        (async() => {
            const res = await checkLogin();
            if (res) {
                navigate('/admin/products');
            }
        })();
    }, []);

    const login = async (data) => {
        try {
            const res = await authService.login(data);
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
                    <form onSubmit={handleSubmit(login)}>
                        <h2 className="fs-3 fw-bold text-center mb-3">請先登入</h2>
                        <Input
                            register={register}
                            errors={errors}
                            id="username"
                            labelText="信箱"
                            type="email"
                            placeholder="請輸入信箱"
                            rules={{
                                required: {
                                    value: true,
                                    message: '信箱為必填'
                                },
                                pattern: {
                                    value: /^\S+@\S+$/i,
                                    message: '信箱格式不正確'
                                }
                            }}
                        ></Input>
                        <Input
                            register={register}
                            errors={errors}
                            id="password"
                            labelText="密碼"
                            type="password"
                            placeholder="請輸入密碼"
                            rules={{
                                required: {
                                    value: true,
                                    message: '密碼為必填'
                                },
                                minLength: {
                                    value: 6,
                                    message: '長度不少於 6 碼'
                                }
                            }}
                        ></Input>
                        <button type="submit" className="btn btn-primary w-100">登入</button>
                    </form>
                </div>
            </div>
        </div>
    </>)
};

export default Login;