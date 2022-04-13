import { useRoutes } from 'react-router-dom';

interface Route {
    path: string,
    element: React.ReactElement
}

type RouteWithChildren = Route & {
    children?: Route[]
}

const routes: RouteWithChildren[] = [
    {
        path: '/',
        element: <div>home screen {import.meta.env.VITE_APP_NAME}</div>
    }
];

const ApplicationRouter = () => useRoutes(routes);

export default ApplicationRouter;