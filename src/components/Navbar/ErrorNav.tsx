import React from 'react'
import { useRouteError } from 'react-router-dom';

function ErrorNav() {
    const error: any = useRouteError();
    console.error(error);
    console.log(typeof (error))

    return (
        <div id="error-page">
            <h1>Oops!</h1>
            <p>la ruta presenta errores</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
}

export default ErrorNav