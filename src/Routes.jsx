import { BrowserRouter, Route, Routes, Navigate, Outlet } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Subscribe from './pages/Subscribe';
import Panel from './pages/Panel';
import ErrorPage from './pages/ErrorPage';
import useData from './hooks/useData';
import Unsub from './pages/Unsub';

const Auth = () => {
    const { token } = useData();
    if (!token) return <Navigate to='/' />;
    return <Outlet />;
}

function RoutesApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Subscribe />} />
                <Route path='/register' element={<Register />} />
                <Route path='/unsub' element={<Unsub />} />
                <Route path='/login' element={<Login />} />
                <Route element={<Auth />}>
                    <Route path='/panel' element={<Panel />} />
                </Route>
                <Route path='*' element={<ErrorPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;