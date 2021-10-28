import { useRoutes } from 'react-router-dom';
import Login from 'src/features/login';

import protectedRoutes from './protected';
import publicRoutes from './public';

const AppRoutes: React.FC = () => {
  const isAuthorizedAccess = true;
  const commonRoutes = [{ path: '/', element: <Login /> }];
  const routes = protectedRoutes;
  isAuthorizedAccess ? protectedRoutes : publicRoutes;
  const element = useRoutes([...routes, ...commonRoutes]);
  return <>{element}</>;
};

export default AppRoutes;
