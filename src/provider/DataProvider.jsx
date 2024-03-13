import 'sweetalert2/dist/sweetalert2.min.css';

import { useMemo, useState } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import DataContext from './DataContext';

const iSwal = withReactContent(Swal);
const DataProvider = (props) => {
  const [showLoader, setShowLoader] = useState(false);
  const [activeRoute, setActiveRoute] = useState('');
  const [breadcrumb, setBreadcrumb] = useState([]);
  const [sideMenuOpen, setSideMenuOpen] = useState(true);
  const [persistToast, setPersistToast] = useState(false);
  const closeSwal = () => {
    iSwal.close();
  };
  const showToast = async (html, icon = 'success', timer = 5000) => {
    await iSwal.fire({
      toast: true,
      position: 'top-end',
      html,
      icon,
      timer,
      showConfirmButton: false,
      width: 440,
    });
  };
  const showConfirm = async (
    html,
    icon = 'question',
    yes = 'Sim',
    no = 'Não',
  ) => {
    return await iSwal.fire({
      html,
      icon,
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonText: yes,
      cancelButtonText: no,
    });
  };
  const DataContextValue = useMemo(
    () => ({
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
    }),
    [showLoader, activeRoute, breadcrumb, sideMenuOpen, persistToast],
  );

  return (
    <DataContext.Provider value={DataContextValue} {...props}>
      {props.children}
    </DataContext.Provider>
  );
};

export default DataProvider;
