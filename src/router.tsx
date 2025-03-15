import { Route, Routes } from 'react-router-dom';

import LoadingPage from '@/pages/loading';
import React, { Suspense } from 'react';
import Landing from './pages/landing';

const MainRoutes: React.FC = () => {
  return (
    <Suspense fallback={<LoadingPage />}>
      <Routes>
        <Route path="/*" element={<Landing />} />


      </Routes>
    </Suspense>
  );
};

export default MainRoutes;
