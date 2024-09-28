// * useRouteError is a React Hook which is used to get access to errors while routing.
// * it basically gives us an object which contains details about errors.

import { useRouteError } from "react-router-dom";

const Error = () => {
    const err= useRouteError();
    return (
        <div>
            <h1>Oopppsss!!!!!!!!!</h1>
            <h2>Something went wrong</h2>
            <h3>
                {err.status}: {err.statusText}
            </h3>

        </div>
    )
}

export default Error;