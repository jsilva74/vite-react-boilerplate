import ProtectedRoute from '@/components/ProtectedRoute';
import FullLayout from '@/layouts/Full';
import MainLayout from '@/layouts/Main';
import useAppStore from '@/storage/appStore';
import { lazy, Suspense } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';

const NotFound = () => {
  const location = useLocation();
  if (location.pathname === '/') return <></>;
  return <Navigate to="/" />;
};
const Home = lazy(() => import('@/pages/Home'));
const Routing = () => {
  const { authenticated } = useAppStore((state) => state.user);

  return (
    <Suspense>
      <Routes location={location} key={location.pathname}>
        <Route element={<FullLayout />}>
          <Route
            path="/Login/RecuperarSenha/:confirmationCode/SiglaCorporacao/:companyCode"
            element={<Home />}
          />
        </Route>
        <Route element={!authenticated ? <FullLayout /> : <MainLayout />}>
          <Route
            path="/"
            element={
              !authenticated ? (
                <Home />
              ) : (
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              )
            }
          />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default Routing;
