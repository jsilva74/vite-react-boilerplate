import 'ldrs/waveform';

import { Backdrop, Box } from '@mui/material';
import { AnimatePresence, motion } from 'framer-motion';

const Splash = ({ open }) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
        layout
      >
        <Backdrop
          open={open}
          sx={{
            backgroundColor: (theme) => theme.palette.primary.dark,
            display: 'flex',
            flexDirection: 'column',
            rowGap: '40px',
          }}
        >
          <Box>
            <l-waveform color="#fff" size={72} speed={1} />
          </Box>
        </Backdrop>
      </motion.div>
    </AnimatePresence>
  );
};

export default Splash;
