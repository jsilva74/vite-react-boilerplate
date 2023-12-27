import { Box, Container } from '@mui/material';
import { Outlet } from 'react-router-dom';

import Header from '@/components/Header/Header';

const Main = () => {
  return (
    <Container maxWidth="" style={{ padding: 0 }}>
      <Header />
      <Box>
        <Outlet />
      </Box>
    </Container>
  );
};
export default Main;
