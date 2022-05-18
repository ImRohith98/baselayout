import LoginPage from '@/components/Auth/login';
import LogoutPage from '@/components/Auth/logout';
// import SideNav from '@/components/sidenav';
import NewSidebar from '@/components/sidenav/newSidebar';
import { connectorsSubNav } from '@/constant';
import Connectors from '@/pages/connectors';
import Cryptocurrency from '@/pages/connectors/subModules/cryptocurrency';
import Devops from '@/pages/connectors/subModules/devops';
import SearchUsers from '@/pages/connectors/subModules/hocTesting';
import HomePage from '@/pages/home';
import Form from '@/pages/home/form';
import JobPage from '@/pages/job';
import People from '@/pages/people';
import { subNavRoute } from '@/types';
import { Flex } from '@chakra-ui/react';
import { Navigate, Outlet, Route, Routes } from 'react-router-dom';

interface Route {
	path: string;
	element: React.ReactElement;
}

type RouteWithChildren = Route & {
	children?: Route[];
};

const routes: RouteWithChildren[] = [
	{
		path: '/home',
		element: <HomePage />
	},
	{
		path: '/connectors',
		element: <Connectors />
	},
	{
		path: '/job',
		element: <JobPage />
	},
	{
		path: '/people',
		element: <People />
	}
];

const connectorsRoutes: RouteWithChildren[] = [
	{
		path: 'devops',
		element: <Devops />
	},
	{
		path: 'jenkins',
		element: <Cryptocurrency />
	},
	{
		path: 'azure',
		element: <SearchUsers />
	},
	{
		path: 'aws',
		element: <div>aws</div>
	}
];

const useAuth = (): boolean => {
	const auth: boolean = JSON.parse(localStorage.getItem('authProvider') || '').auth;
	if (auth) {
		return true;
	} else {
		return false;
	}
};

const ProtectedRoute = () => {
	const auth: boolean = useAuth();
	return auth ? <Outlet /> : <Navigate to="/login" />;
};

const PublicRoute = () => {
	const auth: boolean = useAuth();
	return !auth ? <Outlet /> : <Navigate to="/home" />;
};

const InnerContent = ({ subNavRoutes }: subNavRoute) => {
	return (
		<>
			<NewSidebar subNavRoutes={subNavRoutes}>
				<Flex
					direction={'column'}
					ml={{ base: 'none', md: '85px' }}
					p={2}
					style={{ overflowY: 'auto', height: 'calc(100vh - 95px)' }}
				>
					{<Outlet />}
				</Flex>
			</NewSidebar>
		</>
	);
};

const ApplicationRouter = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<ProtectedRoute />}>
					<Route path="/" element={<InnerContent />}>
						<Route path="/" element={<Navigate replace to="home" />} />
						{routes.map((a) => (
							<Route key={a.path} path={a.path} element={a.element} />
						))}
					</Route>
				</Route>
				<Route path="home" element={<InnerContent />}>
					<Route index element={<HomePage />} />
					<Route path="form" element={<Form />} />
				</Route>
				<Route path="connectors" element={<InnerContent subNavRoutes={connectorsSubNav} />}>
					<Route path="/connectors" element={<Navigate replace to="/connectors/devops" />} />
					{connectorsRoutes.map((a) => (
						<Route key={a.path} path={a.path} element={a.element} />
					))}
				</Route>
				<Route path="login" element={<PublicRoute />}>
					<Route path="/login" element={<LoginPage />} />
				</Route>
				<Route path="/logout" element={<LogoutPage />} />
			</Routes>
		</>
	);
};

export default ApplicationRouter;
