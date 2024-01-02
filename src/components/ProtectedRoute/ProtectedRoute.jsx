import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import useUI from '@/data-context/useUI';
import useAppStore from '@/storage/appStore';

const ProtectedRoute = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const {
    setActiveRoute,
    setBreadcrumb,
    closeSwal,
    persistToast,
    setPersistToast,
  } = useUI();
  const { isAdmin } = useAppStore((state) => state.user);
  const { token } = useAppStore((state) => state.auth);
  const { paths, labels } = children.props;
  const [, pathname] = location.pathname.split('/');

  useEffect(() => {
    if (!persistToast) closeSwal();
    setPersistToast(false);
    // TODO: add token check
    if (children.props.restricted && !isAdmin) {
      return navigate('/', { replace: true });
    }
    setActiveRoute(pathname);
    if (labels)
      setBreadcrumb(
        labels?.map((label, idx) => ({ label, path: paths[idx] })) || [],
      );
  }, [token, isAdmin, labels, paths, pathname, children.props.restricted]);

  return children;
};

export default ProtectedRoute;
