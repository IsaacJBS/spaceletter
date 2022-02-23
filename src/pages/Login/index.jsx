import './styles.css';
import Form from '../../components/Form';
import planet from '../../assets/planet.svg';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schemaLogin from '../../validations/schemaLogin'
import { route } from '../../route';
import ToastifyError from '../../helpers/ToastifyError';
import ToastifySuccess from '../../helpers/ToastifySuccess';
import Loader from '../../helpers/Loader';
import useData from '../../hooks/useData';
import openEye from '../../assets/eye.svg';
import closedEye from '../../assets/eye-off.svg';
import { Link, useNavigate } from 'react-router-dom';


function Login() {
    const validationEmail = { resolver: yupResolver(schemaLogin) };
    const { register, handleSubmit, formState: { errors } } = useForm(validationEmail);
    const { loading, setLoading, toggleEye, setToggleEye, setToken } = useData();
    const navigate = useNavigate();
    async function onSubmit(data) {
        try {
            setLoading(true);
            const requestLogin = await fetch(`${route}/admin/login`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
            const responseStatus = requestLogin.status;
            const responseApi = await requestLogin.json();
            console.log(responseApi)
            if (responseStatus === 202) {
                ToastifySuccess("Login efetuado com sucesso");
                setToken(responseApi.token);
                navigate("/panel");
            }
            if (responseStatus !== 202) {
                ToastifyError(responseApi);
            }
            setLoading(false);
        } catch (error) {
            ToastifyError(error.message);
            setLoading(false);
        }
    }
    return (
        <div>
            <Form>
                <div className='container-login'>
                    <div className='title'>
                        <img src={planet} alt="planeta" />
                        <h1>Login</h1>
                    </div>
                    <div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input id='email' className='input' name='email' placeholder='Insira seu e-mail' type="text" {...register('email')} />
                            <p className='errors'>{errors.email?.message}</p>
                            <div className='input-password'>
                                <input id='pass' className='input input-password' name='password' placeholder='Insira sua senha' type={toggleEye ? "text" : "password"} {...register('password')} />
                                <button className="eye" onClick={() => setToggleEye(!toggleEye)} type="button"><img src={toggleEye ? openEye : closedEye} alt="" /></button>
                            </div>
                            <p className='errors'>{errors.password?.message}</p>
                            <div className='login-flex'>
                                <button type='submit' className='button '>Enviar</button>
                                <Link to="/register">Cadastrar Admin</Link>
                            </div>
                        </form>
                    </div>
                    {loading && <Loader />}
                </div>
            </Form>
        </div>
    )
};

export default Login;