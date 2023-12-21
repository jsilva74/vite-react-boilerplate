import { Outlet } from 'react-router-dom';
import * as S from './Full.style';

const Full = () => (
  <S.Container>
    <Outlet />
  </S.Container>
);

export default Full;
