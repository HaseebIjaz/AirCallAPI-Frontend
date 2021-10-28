import { Navigate, Routes, Route } from 'react-router-dom';

import CallDetails from '../callDetails';
import CallsList from '../callsList';
export const CallsRoutes = () => {
  return (
    <Routes>
      <Route path="/:id" element={<CallDetails />} />
      <Route path="/" element={<CallsList />} />
      <Route path="*" element={<Navigate to="." />} />
    </Routes>
  );
};
` `;
