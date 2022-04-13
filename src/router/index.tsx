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
        element: <div>home screen</div>
    }
];

const ApplicationRouter = () => useRoutes(routes);

export default ApplicationRouter;