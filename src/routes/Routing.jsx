import { lazy, Suspense } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';

import ProtectedRoute from '@/components/ProtectedRoute';
import FullLayout from '@/layouts/Full';
import MainLayout from '@/layouts/Main';
import useAppStore from '@/storage/appStore';

const PageHome = lazy(() => import('@/pages/Home'));
const NotFound = () => {
  const location = useLocation();
  if (location.pathname === '/') return <></>;
  return <Navigate to="/" state={{ from: location }} replace />;
};
const routes = [
  {
    Component: MainLayout,
    routes: [
      { path: ['/'], Component: PageHome },
      { path: ['*'], Component: NotFound },
    ],
  },
  {
    Component: FullLayout,
    routes: [],
  },
];
const Routing = ({ show }) => {
  const { isAdmin } = useAppStore((state) => state.user);
  const { token } = useAppStore((state) => state.auth);

  return (
    <Routes location={location} key={location.pathname}>
      {routes.map(({ Component: Layout, routes: layoutRoutes }, lIdx) => (
        <Route element={<Layout show={show} />} key={lIdx} replace>
          {layoutRoutes
            .filter(({ restricted }) => !restricted || isAdmin)
            .map(({ path, Component, Fallback, restricted, label }, rIdx) => (
              <Route
                path={path?.join('/')}
                element={
                  <Suspense fallback="Wait...">
                    <ProtectedRoute>
                      {Fallback === undefined ? (
                        <Component
                          restricted={restricted}
                          labels={label}
                          paths={path}
                        />
                      ) : token ? (
                        <Component
                          restricted={restricted}
                          labels={label}
                          paths={path}
                        />
                      ) : (
                        <Fallback />
                      )}
                    </ProtectedRoute>
                  </Suspense>
                }
                key={rIdx}
              />
            ))}
        </Route>
      ))}
    </Routes>
  );
};

export default Routing;
