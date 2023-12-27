import { Backdrop, CircularProgress } from '@mui/material';

import useUI from '@/data-context/useUI';

const Loader = () => {
  const { showLoader } = useUI();

  return (
    <Backdrop open={showLoader} sx={{ zIndex: 1500 }}>
      <CircularProgress color="primary" />
    </Backdrop>
  );
};

export default Loader;
