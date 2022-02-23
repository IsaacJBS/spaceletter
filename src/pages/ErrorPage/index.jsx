import React from 'react';
import astronaut from '../../assets/astronaut.svg';
import './styles.css';

function ErrorPage() {
    return (
        <div className='container-error'>
            <h1>Ooops, página não encontrada</h1>
            <img src={astronaut} alt="" />
        </div>
    )
}

export default ErrorPage;