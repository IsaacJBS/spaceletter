import React, { useState } from 'react';
import Form from '../../components/Form';
import planet from '../../assets/planet.svg';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schemaEmail from '../../validations/schemaEmail'
import { route } from '../../route';
import ToastifyError from '../../helpers/ToastifyError';
// import ToastifySuccess from '../../helpers/ToastifySuccess';
import Loader from '../../helpers/Loader';
import antenna from '../../assets/antenna.svg';
import './styles.css';

function Unsub() {
    const validationEmail = { resolver: yupResolver(schemaEmail) }
    const { register, handleSubmit, formState: { errors } } = useForm(validationEmail);
    const [loading, setLoading] = useState(false);
    const [messageUnsub, setMessageUnsub] = useState(false);
    async function onSubmit(data) {
        console.log(data)
        try {
            setLoading(true);
            const requestEmail = await fetch(`${route}/unsub`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
            const responseStatus = requestEmail.status;
            const responseApi = await requestEmail.json();
            if (responseStatus === 200) {
                setMessageUnsub(!messageUnsub)
            }
            if (responseStatus !== 200) {
                ToastifyError(responseApi)
            }
            setLoading(false);
        } catch (error) {
            ToastifyError(error.message)
            setLoading(false);
        }
    }
    return (
        <div>
            <Form>
                <div className='container'>
                    {!messageUnsub && (
                        <>
                            <div className='title'>
                                <img src={planet} alt="planeta" />
                                <span>Confirme o seu e-mail para desinscrever</span>
                            </div>
                            <div >
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <input id='email' className='input' name='email' placeholder='Insira seu e-mail' type="text" {...register('email')} />
                                    <button type='submit' className='submit-button'>Enviar</button>
                                </form>
                                <p className='errors'>{errors.email?.message}</p>
                            </div>
                            {loading && <Loader />}
                        </>
                    )}
                    {messageUnsub && (
                        <div className='container-unsub'>
                            <div>
                                <h1>O sinal da sua base foi desligado</h1>
                            </div>
                            <div>
                                <img src={antenna} alt="antena" />
                            </div>
                        </div>
                    )}
                </div>
            </Form>
        </div>
    )
}

export default Unsub;