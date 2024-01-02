import { Box, Container } from '@mui/material';
import { AnimatePresence, motion } from 'framer-motion';
import { Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import Header from '@/components/Header';

const Main = ({ show }) => {
  const { pathname } = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: Number(show) }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
        layout
      >
        <Container maxWidth="" sx={{ padding: '0 !important' }}>
          <Header />
          <Box>
            <Outlet />
          </Box>
        </Container>
      </motion.div>
    </AnimatePresence>
  );
};
export default Main;
