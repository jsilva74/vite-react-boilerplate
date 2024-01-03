import { Container } from '@mui/material';
import { motion } from 'framer-motion';
import { Outlet } from 'react-router-dom';

const Full = () => (
  <Container maxWidth="" sx={{ padding: '0 !important' }}>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
      layout
    >
      <Outlet />
    </motion.div>
  </Container>
);

export default Full;
