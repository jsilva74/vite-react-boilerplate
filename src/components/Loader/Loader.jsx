import * as S from './Loader.style';

const Loader = ({ open }) => {
  return (
    <S.Overlay open={open}>
      <S.CircularProgressIcon />
    </S.Overlay>
  );
};

export default Loader;
