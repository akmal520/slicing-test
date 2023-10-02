import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginPage from './pages/login.jsx';
import RegisterPage from './pages/register';
import ErrorPage from './pages/404';
import HomePage from './pages/home';
import DashboardPage from './pages/Admin/dashboard';
import UserManagementPage from './pages/Admin/userManagement';
import AboutUsPage from './pages/aboutus';

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />,
    },
    {
        path: '/login',
        element: <LoginPage />,
    },
    {
        path: '/register',
        element: <RegisterPage />,
    },
    {
        path: '/*',
        element: <ErrorPage />,
        errorElement: <ErrorPage />,
    },
    {
        path: '/admin/dashboard',
        element: <DashboardPage />,
    },
    {
        path: '/admin/data-source',
        element: <UserManagementPage />,
    },
    {
        path: '/about-us',
        element: <AboutUsPage />,
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
