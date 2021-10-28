import { Navigate } from 'react-router-dom';
import { CallsRoutes } from 'src/features/calls/routes';

const protectedRoutes = [
  { path: 'calls/*', element: <CallsRoutes /> },
  { path: '*', element: <Navigate to="." /> },
];
export default protectedRoutes;
