import './styles.css';
import React, { useState } from 'react';
import Form from '../../components/Form';
import planet from '../../assets/planet.svg';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schemaEmail from '../../validations/schemaEmail'
import { route } from '../../route';
import ToastifyError from '../../helpers/ToastifyError';
import ToastifySuccess from '../../helpers/ToastifySuccess';
import Loader from '../../helpers/Loader';


function Subscribe() {
    const validationEmail = { resolver: yupResolver(schemaEmail) }
    const { register, reset, handleSubmit, formState: { errors } } = useForm(validationEmail);
    const [loading, setLoading] = useState(false);
    async function onSubmit(data) {
        try {
            setLoading(true);
            const requestEmail = await fetch(`${route}/register`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
            const responseStatus = requestEmail.status;
            const responseApi = await requestEmail.json();
            if (responseStatus === 200) {
                ToastifySuccess(responseApi)
            }
            if (responseStatus !== 200) {
                ToastifyError(responseApi)
            }
            setLoading(false);
            reset({ email: "" })
        } catch (error) {
            ToastifyError(error.message)
            setLoading(false);

        }
    }
    return (
        <div>
            <Form>
                <div className='container'>
                    <div className='title'>
                        <img src={planet} alt="planeta" />
                        <h1>Se inscreva na Spaceletter</h1>
                        <span>A sua newsletter diária sobre astronomia</span>
                    </div>
                    <div >
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input id='email' className='input' name='email' placeholder='Insira seu e-mail' type="text" {...register('email')} />
                            <button type='submit' className='submit-button'>Enviar</button>
                        </form>
                        <p className='errors'>{errors.email?.message}</p>
                    </div>
                    {loading && <Loader />}
                </div>
            </Form>
        </div>
    )
};

export default Subscribe;