import React from 'react'
import ReactDOM from 'react-dom/client'
import {
    createBrowserRouter,
    RouterProvider,
    Route,
} from "react-router-dom";
import App from './App'
import { Provider } from 'react-redux'
import { store } from './redux/store/store'

import './App.css'
import './index.css'
import Navbar from './components/Navbar';
import ErrorNav from './components/Navbar/ErrorNav';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Navbar />,
        errorElement: <ErrorNav />
    },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>
)
