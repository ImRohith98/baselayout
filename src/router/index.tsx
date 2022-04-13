import { useRoutes } from 'react-router-dom';

export const routes = [
    {
        path: '/',
        element: <div>home screen</div>
    }
];

const ApplicationRouter = () => useRoutes(routes);

export default ApplicationRouter;