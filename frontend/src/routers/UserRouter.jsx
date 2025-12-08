import { Routers, Route } from 'react-router-dom';
import UserLayout from '../layouts/UserLayout';
import Home from '../pages/user/Home';
import Login from '../pages/user/Login';

export default function UserRouter() {
    return (
        <UserLayout>
            <Routers>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
            </Routers>
        </UserLayout>
    )
}