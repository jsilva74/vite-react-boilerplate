import { Box, Container } from '@mui/material';
import { motion } from 'framer-motion';
import { Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import Header from '@/components/Header';

const Main = () => {
  const { pathname } = useLocation();

  return (
    <Container maxWidth="" sx={{ padding: '0 !important' }}>
      <Header />
      <Box>
        <motion.div
          key={pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
        >
          <Outlet />
        </motion.div>
      </Box>
    </Container>
  );
};
export default Main;
