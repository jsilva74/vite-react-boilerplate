import { lazy, Suspense } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import FullLayout from '../layouts/Full';
import MainLayout from '../layouts/Main';
import ProtectedRoute from '../components/ProtectedRoute';
import useUserStore from '../storage/userStore';

const PageHome = lazy(() => import('../pages/Home'));
const NotFound = () => {
  const location = useLocation();
  return <Navigate to="/" state={{ from: location }} replace />;
};
const routes = [
  {
    Component: MainLayout,
    routes: [
      { path: ['/'], Component: PageHome, Fallback: PageHome },
      { path: ['*'], Component: NotFound },
    ],
  },
  {
    Component: FullLayout,
    routes: [],
  },
];
const Routing = () => {
  const user = useUserStore((state) => state.user);
  const token = useUserStore((state) => state.token);
  const { isAdmin } = user || {};

  return (
    <Routes>
      {routes.map(({ Component: Layout, routes: layoutRoutes }, lIdx) => (
        <Route element={<Layout />} key={lIdx} replace>
          {layoutRoutes
            .filter(({ restricted }) => !restricted || isAdmin)
            .map(({ path, Component, Fallback, restricted, label }, rIdx) => (
              <Route
                path={path?.join('/')}
                element={
                  <Suspense fallback="Aguarde...">
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
