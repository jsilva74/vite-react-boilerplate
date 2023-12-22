import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import useUI from '@/data-context/useUI';
import useUserStore from '@/storage/userStore';

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
  const user = useUserStore((state) => state.user);
  const token = useUserStore((state) => state.token);
  const { isAdmin } = user;
  const { paths, labels } = children.props;
  const [, pathname] = location.pathname.split('/');

  useEffect(() => {
    if (!persistToast) closeSwal();
    setPersistToast(false);
    if (
      (!token && location.pathname !== '/') ||
      (children.props.restricted && !isAdmin)
    ) {
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
