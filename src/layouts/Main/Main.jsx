import { Outlet } from 'react-router-dom';
import Header from '@/components/Header/Header';
import useUI from '@/data-context/useUI';
import useUserStore from '@/storage/userStore';
import * as S from './Main.style';

const Main = () => {
  const { sideMenuOpen } = useUI();
  const token = useUserStore((state) => state.token);

  return (
    <S.Container>
      <Header />
      <S.Content collapse={token && sideMenuOpen ? 1 : token ? 0 : -1}>
        <Outlet />
      </S.Content>
    </S.Container>
  );
};
export default Main;
