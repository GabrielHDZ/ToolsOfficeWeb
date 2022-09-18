import React from 'react'
import { useRouteError } from 'react-router-dom';

/**
 * The ErrorNav function is a React component that displays an error message when the useRouteError
 * hook returns an error.
 * @returns The error object is being returned.
 */
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