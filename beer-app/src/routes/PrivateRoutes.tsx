import { Outlet } from 'react-router';

/**
 * Check access key or any other authentication key for before accessing private routes.
 * @constructor
 */
export const PrivateRoutes = () => {
    return <Outlet/>
}
