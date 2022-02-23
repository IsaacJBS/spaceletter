import { BrowserRouter, Route, Routes, Navigate, Outlet } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Subscribe from './pages/Subscribe';
import Panel from './pages/Panel';
import useData from './hooks/useData';

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
                <Route path='/login' element={<Login />} />
                <Route element={<Auth />}>
                    <Route path='/panel' element={<Panel />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;