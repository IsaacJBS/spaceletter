import { useForm } from 'react-hook-form';
import planet from '../../assets/planet.svg';
import Form from '../../components/Form';
import Loader from '../../helpers/Loader';
import ToastifyError from '../../helpers/ToastifyError';
import ToastifySuccess from '../../helpers/ToastifySuccess';
import useData from '../../hooks/useData';
import { route } from '../../route';
import { useNavigate } from 'react-router-dom'
import './styles.css';
import schemaPanel from '../../validations/schemaPanel';
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from 'react';

function Panel() {
    const validationPanel = { resolver: yupResolver(schemaPanel) };
    const { handleSubmit, register, reset, formState: { errors } } = useForm(validationPanel);
    const { loading, setLoading, token, removeToken } = useData();
    const navigate = useNavigate();

    useEffect(() => {
        if(token === "jwt_expired") {
            removeToken(token);
            navigate("/login");
        }
    }, []);

    async function onSubmit({ title, text }) {
        const data = { title, text }
        try {
            setLoading(true);
            const requestText = await fetch(`${route}/admin/send`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify(data)
            })
            const responseStatus = requestText.status;
            const responseApi = await requestText.json();
            if (responseStatus === 200) {
                ToastifySuccess("Newsletter enviada com sucesso");
            }
            if (responseStatus !== 200) {
                ToastifyError(responseApi);
            }
            reset({ title: "", text: "" })
            setLoading(false);
        } catch (error) {
            ToastifyError(error.message);
            setLoading(false);
        }
    };
    return (
        <Form >
            <div className='panel'>
                <div className='title'>
                    <img src={planet} alt="planeta" />
                    <h1>Painel</h1>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input className='input-title' name='title' placeholder='Insira o título da notícia' type="text" {...register('title')} />
                    <p className='errors'>{errors.title?.message}</p>
                    <textarea rows="10" cols="50" className='input-text' name='text' placeholder='Insira o texto da notícia' type="text" {...register('text')} />
                    <p className='errors'>{errors.text?.message}</p>
                    <div className='button-panel'>
                        <input type="submit" className='button' />
                        {loading && <Loader />}
                    </div>
                </form>
            </div>
        </Form >
    )
}

export default Panel;