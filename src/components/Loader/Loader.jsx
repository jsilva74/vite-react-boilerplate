import 'ldrs/waveform';

import { Backdrop, Box } from '@mui/material';

import useUI from '@/data-context/useUI';

const Loader = () => {
  const { showLoader } = useUI();

  return (
    <Backdrop
      open={showLoader}
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Box>
        <l-waveform color="#fff" size={72} speed={1} />
      </Box>
    </Backdrop>
  );
};

export default Loader;
