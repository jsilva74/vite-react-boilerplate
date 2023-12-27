import { Container } from '@mui/material';
import { Outlet } from 'react-router-dom';

const Full = () => (
  <Container>
    <Outlet />
  </Container>
);

export default Full;
