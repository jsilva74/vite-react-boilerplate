import { useDataContext } from './DataContextProvider';

const useUI = () => {
  const {
    showLoader,
    setShowLoader,
    closeSwal,
    showToast,
    showConfirm,
    activeRoute,
    setActiveRoute,
    breadcrumb,
    setBreadcrumb,
    sideMenuOpen,
    setSideMenuOpen,
    persistToast,
    setPersistToast,
  } = useDataContext();

  return {
    showLoader,
    setShowLoader,
    closeSwal,
    showToast,
    showConfirm,
    activeRoute,
    setActiveRoute,
    breadcrumb,
    setBreadcrumb,
    sideMenuOpen,
    setSideMenuOpen,
    persistToast,
    setPersistToast,
  };
};

export default useUI;
