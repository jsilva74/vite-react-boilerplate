import useDataContext from './useDataContext';

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
